// Firebase imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithPhoneNumber, RecaptchaVerifier, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getDatabase, ref, set, get, update, push, onValue } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDm6hxlqYsMfdtDOiNjXalIzqNnj6GDJNU",
    authDomain: "brotherbank-v1.firebaseapp.com",
    databaseURL: "https://brotherbank-v1-default-rtdb.firebaseio.com",
    projectId: "brotherbank-v1",
    storageBucket: "brotherbank-v1.firebasestorage.app",
    messagingSenderId: "655245112035",
    appId: "1:655245112035:web:5c3ea0639c1feff2c50bd6",
    measurementId: "G-2MJ2VGE720"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

// Global variables
let currentUser = null;
let userBalance = 1000000; // 1 million AED
let commissionsLeft = 5;
let tradingBalance = 0;
let openPositions = [];
let transactions = [];
let cardDetails = null;
let refillInterval = null;

// Market data simulation
const marketData = {
    forex: [
        { pair: 'EUR/USD', buy: 1.0850, sell: 1.0845, change: 0.25 },
        { pair: 'GBP/USD', buy: 1.2650, sell: 1.2645, change: -0.15 },
        { pair: 'USD/JPY', buy: 148.50, sell: 148.45, change: 0.45 },
        { pair: 'AUD/USD', buy: 0.6550, sell: 0.6545, change: 0.12 },
        { pair: 'USD/CHF', buy: 0.8850, sell: 0.8845, change: -0.08 }
    ],
    crypto: [
        { pair: 'BTC/USD', buy: 45250, sell: 45200, change: 2.5 },
        { pair: 'ETH/USD', buy: 2350, sell: 2345, change: 1.8 },
        { pair: 'BNB/USD', buy: 315, sell: 312, change: -0.5 },
        { pair: 'XRP/USD', buy: 0.65, sell: 0.64, change: 3.2 },
        { pair: 'ADA/USD', buy: 0.48, sell: 0.47, change: 1.1 }
    ],
    stocks: [
        { pair: 'AAPL', buy: 185.50, sell: 185.40, change: 0.8 },
        { pair: 'GOOGL', buy: 142.30, sell: 142.20, change: 1.2 },
        { pair: 'MSFT', buy: 378.20, sell: 378.10, change: -0.3 },
        { pair: 'TSLA', buy: 245.60, sell: 245.50, change: 2.1 },
        { pair: 'AMZN', buy: 155.80, sell: 155.70, change: 0.6 }
    ]
};

// DOM Elements
const loginScreen = document.getElementById('loginScreen');
const appScreen = document.getElementById('appScreen');
const loadingOverlay = document.getElementById('loadingOverlay');

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    initializeAuth();
    setupEventListeners();
    simulateMarketPrices();
});

// Authentication
function initializeAuth() {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            currentUser = user;
            loadUserData();
            showApp();
        } else {
            showLogin();
        }
    });
}

// Google Sign In
document.getElementById('googleLogin').addEventListener('click', async () => {
    showLoading();
    const provider = new GoogleAuthProvider();
    try {
        const result = await signInWithPopup(auth, provider);
        currentUser = result.user;
        await initializeUserAccount();
        showToast('تم تسجيل الدخول بنجاح!', 'success');
    } catch (error) {
        showToast('فشل تسجيل الدخول: ' + error.message, 'error');
    } finally {
        hideLoading();
    }
});

// Phone Sign In
let confirmationResult;
document.getElementById('phoneLogin').addEventListener('click', () => {
    document.getElementById('phoneForm').style.display = 'block';
    document.getElementById('emailForm').style.display = 'none';
    
    if (!window.recaptchaVerifier) {
        window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
            'size': 'invisible'
        });
    }
});

document.getElementById('sendCode').addEventListener('click', async () => {
    const phoneNumber = document.getElementById('phoneNumber').value;
    if (!phoneNumber) {
        showToast('الرجاء إدخال رقم الهاتف', 'error');
        return;
    }
    
    showLoading();
    try {
        confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, window.recaptchaVerifier);
        document.getElementById('codeInput').style.display = 'block';
        showToast('تم إرسال رمز التحقق', 'success');
    } catch (error) {
        showToast('فشل إرسال الرمز: ' + error.message, 'error');
    } finally {
        hideLoading();
    }
});

document.getElementById('verifyCode').addEventListener('click', async () => {
    const code = document.getElementById('verificationCode').value;
    if (!code) {
        showToast('الرجاء إدخال رمز التحقق', 'error');
        return;
    }
    
    showLoading();
    try {
        const result = await confirmationResult.confirm(code);
        currentUser = result.user;
        await initializeUserAccount();
        showToast('تم تسجيل الدخول بنجاح!', 'success');
    } catch (error) {
        showToast('رمز التحقق غير صحيح', 'error');
    } finally {
        hideLoading();
    }
});

// Email Sign In
document.getElementById('emailLogin').addEventListener('click', () => {
    document.getElementById('emailForm').style.display = 'block';
    document.getElementById('phoneForm').style.display = 'none';
});

document.getElementById('emailSignIn').addEventListener('click', async () => {
    const email = document.getElementById('emailInput').value;
    const password = document.getElementById('passwordInput').value;
    
    if (!email || !password) {
        showToast('الرجاء إدخال البريد الإلكتروني وكلمة المرور', 'error');
        return;
    }
    
    showLoading();
    try {
        const result = await signInWithEmailAndPassword(auth, email, password);
        currentUser = result.user;
        showToast('تم تسجيل الدخول بنجاح!', 'success');
    } catch (error) {
        showToast('فشل تسجيل الدخول: ' + error.message, 'error');
    } finally {
        hideLoading();
    }
});

document.getElementById('emailSignUp').addEventListener('click', async () => {
    const email = document.getElementById('emailInput').value;
    const password = document.getElementById('passwordInput').value;
    
    if (!email || !password) {
        showToast('الرجاء إدخال البريد الإلكتروني وكلمة المرور', 'error');
        return;
    }
    
    if (password.length < 6) {
        showToast('كلمة المرور يجب أن تكون 6 أحرف على الأقل', 'error');
        return;
    }
    
    showLoading();
    try {
        const result = await createUserWithEmailAndPassword(auth, email, password);
        currentUser = result.user;
        await initializeUserAccount();
        showToast('تم إنشاء الحساب بنجاح!', 'success');
    } catch (error) {
        showToast('فشل إنشاء الحساب: ' + error.message, 'error');
    } finally {
        hideLoading();
    }
});

// Initialize user account
async function initializeUserAccount() {
    const userRef = ref(database, 'users/' + currentUser.uid);
    const snapshot = await get(userRef);
    
    if (!snapshot.exists()) {
        // New user - create account
        const cardNumber = generateCardNumber();
        const userData = {
            balance: 1000000,
            commissionsLeft: 5,
            tradingBalance: 0,
            cardNumber: cardNumber,
            cardHolder: currentUser.displayName || 'CARD HOLDER',
            cardExpiry: '12/28',
            cardCVV: Math.floor(Math.random() * 900 + 100).toString(),
            lastRefill: Date.now(),
            createdAt: Date.now()
        };
        
        await set(userRef, userData);
    }
}

// Load user data
async function loadUserData() {
    const userRef = ref(database, 'users/' + currentUser.uid);
    const snapshot = await get(userRef);
    
    if (snapshot.exists()) {
        const data = snapshot.val();
        userBalance = data.balance || 1000000;
        commissionsLeft = data.commissionsLeft || 5;
        tradingBalance = data.tradingBalance || 0;
        cardDetails = {
            number: data.cardNumber,
            holder: data.cardHolder,
            expiry: data.cardExpiry,
            cvv: data.cardCVV
        };
        
        updateUI();
        checkDailyRefill(data.lastRefill);
        startRefillTimer();
        loadTransactions();
        loadOpenPositions();
    }
}

// Save user data
async function saveUserData() {
    const userRef = ref(database, 'users/' + currentUser.uid);
    await update(userRef, {
        balance: userBalance,
        commissionsLeft: commissionsLeft,
        tradingBalance: tradingBalance,
        lastRefill: Date.now()
    });
}

// Check daily refill
function checkDailyRefill(lastRefill) {
    const now = Date.now();
    const timeDiff = now - lastRefill;
    const hoursDiff = timeDiff / (1000 * 60 * 60);
    
    if (hoursDiff >= 24) {
        userBalance = 1000000;
        commissionsLeft = 5;
        saveUserData();
        showToast('تم تعبئة رصيدك اليومي!', 'success');
    }
}

// Start refill timer
function startRefillTimer() {
    if (refillInterval) clearInterval(refillInterval);
    
    refillInterval = setInterval(() => {
        const userRef = ref(database, 'users/' + currentUser.uid);
        get(userRef).then(snapshot => {
            if (snapshot.exists()) {
                const lastRefill = snapshot.val().lastRefill;
                const now = Date.now();
                const timeDiff = 24 * 60 * 60 * 1000 - (now - lastRefill);
                
                if (timeDiff <= 0) {
                    checkDailyRefill(lastRefill);
                    return;
                }
                
                const hours = Math.floor(timeDiff / (1000 * 60 * 60));
                const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
                
                document.getElementById('refillTimer').textContent = 
                    `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            }
        });
    }, 1000);
}

// Update UI
function updateUI() {
    document.getElementById('mainBalance').textContent = formatMoney(userBalance);
    document.getElementById('commissionsLeft').textContent = commissionsLeft;
    document.getElementById('tradingBalance').textContent = formatMoney(tradingBalance);
    
    if (cardDetails) {
        document.getElementById('cardNumber').textContent = formatCardNumber(cardDetails.number);
        document.getElementById('cardHolder').textContent = cardDetails.holder;
        document.getElementById('cardExpiry').textContent = cardDetails.expiry;
        document.getElementById('cardCVV').textContent = cardDetails.cvv;
        document.getElementById('receiveCardNumber').textContent = formatCardNumber(cardDetails.number);
        
        // Generate QR Code
        generateQRCode(cardDetails.number);
    }
    
    // Update profile avatar
    const avatar = document.getElementById('userAvatar');
    if (currentUser.photoURL) {
        avatar.style.backgroundImage = `url(${currentUser.photoURL})`;
        avatar.style.backgroundSize = 'cover';
    } else {
        const initial = (currentUser.displayName || currentUser.email || 'U')[0].toUpperCase();
        avatar.textContent = initial;
    }
}

// Event Listeners
function setupEventListeners() {
    // Navigation
    document.querySelectorAll('.nav-item').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const section = e.currentTarget.dataset.section;
            navigateToSection(section);
        });
    });
    
    // Quick actions
    document.getElementById('sendMoneyBtn').addEventListener('click', () => navigateToSection('send'));
    document.getElementById('receiveMoneyBtn').addEventListener('click', () => navigateToSection('receive'));
    document.getElementById('tradingBtn').addEventListener('click', () => navigateToSection('trading'));
    document.getElementById('historyBtn').addEventListener('click', () => navigateToSection('history'));
    
    // Back buttons
    document.getElementById('backFromTrading').addEventListener('click', () => navigateToSection('home'));
    document.getElementById('backFromSend').addEventListener('click', () => navigateToSection('home'));
    document.getElementById('backFromReceive').addEventListener('click', () => navigateToSection('home'));
    document.getElementById('backFromHistory').addEventListener('click', () => navigateToSection('home'));
    
    // Send money
    document.getElementById('confirmSend').addEventListener('click', sendMoney);
    
    // Copy card number
    document.getElementById('copyCardNumber').addEventListener('click', () => {
        navigator.clipboard.writeText(cardDetails.number);
        showToast('تم نسخ رقم البطاقة', 'success');
    });
    
    // Toggle card details
    document.getElementById('toggleCardDetails').addEventListener('click', toggleCardDetails);
    
    // Refresh balance
    document.getElementById('refreshBalance').addEventListener('click', () => {
        loadUserData();
        showToast('تم تحديث الرصيد', 'success');
    });
    
    // Market tabs
    document.querySelectorAll('.market-tab').forEach(tab => {
        tab.addEventListener('click', (e) => {
            document.querySelectorAll('.market-tab').forEach(t => t.classList.remove('active'));
            e.target.classList.add('active');
            loadTradingPairs(e.target.dataset.market);
        });
    });
    
    // Trading modal
    document.getElementById('closeTradeModal').addEventListener('click', closeTradeModal);
    document.getElementById('executeBuy').addEventListener('click', () => executeTrade('buy'));
    document.getElementById('executeSell').addEventListener('click', () => executeTrade('sell'));
    
    // History filters
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            filterHistory(e.target.dataset.filter);
        });
    });
}

// Navigation
function navigateToSection(section) {
    document.querySelectorAll('.content-section').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    
    if (section === 'home') {
        document.getElementById('homeSection').classList.add('active');
        document.querySelector('[data-section="home"]').classList.add('active');
    } else if (section === 'trading') {
        document.getElementById('tradingSection').classList.add('active');
        document.querySelector('[data-section="trading"]').classList.add('active');
        loadTradingPairs('forex');
    } else if (section === 'send') {
        document.getElementById('sendMoneySection').classList.add('active');
        document.querySelector('[data-section="send"]').classList.add('active');
    } else if (section === 'receive') {
        document.getElementById('receiveMoneySection').classList.add('active');
    } else if (section === 'history') {
        document.getElementById('historySection').classList.add('active');
        document.querySelector('[data-section="history"]').classList.add('active');
        loadHistory();
    }
}

// Send money
async function sendMoney() {
    const recipientCard = document.getElementById('recipientCard').value;
    const amount = parseFloat(document.getElementById('sendAmount').value);
    const note = document.getElementById('sendNote').value;
    
    if (!recipientCard || !amount) {
        showToast('الرجاء إدخال رقم البطاقة والمبلغ', 'error');
        return;
    }
    
    if (amount > userBalance) {
        showToast('الرصيد غير كافي', 'error');
        return;
    }
    
    if (commissionsLeft <= 0) {
        showToast('لا توجد عمولات متبقية لليوم', 'error');
        return;
    }
    
    showLoading();
    
    try {
        // Deduct from sender
        userBalance -= amount;
        commissionsLeft--;
        
        // Add transaction
        const transaction = {
            type: 'send',
            amount: amount,
            recipient: recipientCard,
            note: note,
            timestamp: Date.now()
        };
        
        const transRef = ref(database, 'transactions/' + currentUser.uid);
        await push(transRef, transaction);
        
        await saveUserData();
        updateUI();
        
        // Clear form
        document.getElementById('recipientCard').value = '';
        document.getElementById('sendAmount').value = '';
        document.getElementById('sendNote').value = '';
        
        showToast('تم إرسال الأموال بنجاح!', 'success');
        navigateToSection('home');
    } catch (error) {
        showToast('فشل إرسال الأموال: ' + error.message, 'error');
    } finally {
        hideLoading();
    }
}

// Trading
let currentTradingPair = null;

function loadTradingPairs(market) {
    const pairs = marketData[market];
    const container = document.getElementById('tradingPairs');
    container.innerHTML = '';
    
    pairs.forEach(pair => {
        const div = document.createElement('div');
        div.className = 'trading-pair';
        div.innerHTML = `
            <div class="pair-header">
                <div class="pair-name">${pair.pair}</div>
                <div class="pair-change ${pair.change >= 0 ? 'positive' : 'negative'}">
                    ${pair.change >= 0 ? '+' : ''}${pair.change}%
                </div>
            </div>
            <div class="pair-prices">
                <div class="price-item">
                    <span class="price-label">شراء</span>
                    <span class="price-value buy">${pair.buy.toFixed(market === 'crypto' ? 0 : 4)}</span>
                </div>
                <div class="price-item">
                    <span class="price-label">بيع</span>
                    <span class="price-value sell">${pair.sell.toFixed(market === 'crypto' ? 0 : 4)}</span>
                </div>
            </div>
        `;
        
        div.addEventListener('click', () => openTradeModal(pair, market));
        container.appendChild(div);
    });
}

function openTradeModal(pair, market) {
    currentTradingPair = { ...pair, market };
    document.getElementById('modalPairName').textContent = pair.pair;
    document.getElementById('modalBuyPrice').textContent = pair.buy.toFixed(market === 'crypto' ? 0 : 4);
    document.getElementById('modalSellPrice').textContent = pair.sell.toFixed(market === 'crypto' ? 0 : 4);
    document.getElementById('tradingModal').classList.add('active');
}

function closeTradeModal() {
    document.getElementById('tradingModal').classList.remove('active');
    currentTradingPair = null;
}

async function executeTrade(type) {
    const amount = parseFloat(document.getElementById('tradeAmount').value);
    const stopLoss = parseFloat(document.getElementById('stopLoss').value) || null;
    const takeProfit = parseFloat(document.getElementById('takeProfit').value) || null;
    
    if (!amount || amount <= 0) {
        showToast('الرجاء إدخال مبلغ صحيح', 'error');
        return;
    }
    
    if (amount > tradingBalance) {
        // Transfer from main balance
        if (amount > userBalance) {
            showToast('الرصيد غير كافي', 'error');
            return;
        }
        
        const transfer = amount - tradingBalance;
        userBalance -= transfer;
        tradingBalance = amount;
    }
    
    showLoading();
    
    try {
        const position = {
            pair: currentTradingPair.pair,
            type: type,
            amount: amount,
            openPrice: type === 'buy' ? currentTradingPair.buy : currentTradingPair.sell,
            currentPrice: type === 'buy' ? currentTradingPair.buy : currentTradingPair.sell,
            stopLoss: stopLoss,
            takeProfit: takeProfit,
            profit: 0,
            timestamp: Date.now(),
            market: currentTradingPair.market
        };
        
        const posRef = ref(database, 'positions/' + currentUser.uid);
        await push(posRef, position);
        
        // Add transaction
        const transaction = {
            type: 'trade_open',
            pair: currentTradingPair.pair,
            tradeType: type,
            amount: amount,
            price: position.openPrice,
            timestamp: Date.now()
        };
        
        const transRef = ref(database, 'transactions/' + currentUser.uid);
        await push(transRef, transaction);
        
        await saveUserData();
        updateUI();
        loadOpenPositions();
        
        closeTradeModal();
        showToast(`تم فتح صفقة ${type === 'buy' ? 'شراء' : 'بيع'} بنجاح!`, 'success');
    } catch (error) {
        showToast('فشل فتح الصفقة: ' + error.message, 'error');
    } finally {
        hideLoading();
    }
}

async function loadOpenPositions() {
    const posRef = ref(database, 'positions/' + currentUser.uid);
    const snapshot = await get(posRef);
    
    const container = document.getElementById('positionsList');
    container.innerHTML = '';
    
    if (!snapshot.exists()) {
        container.innerHTML = '<div class="empty-state"><p>لا توجد صفقات مفتوحة</p></div>';
        return;
    }
    
    const positions = snapshot.val();
    
    for (let key in positions) {
        const pos = positions[key];
        
        // Update current price
        const marketPairs = marketData[pos.market];
        const currentPair = marketPairs.find(p => p.pair === pos.pair);
        if (currentPair) {
            pos.currentPrice = pos.type === 'buy' ? currentPair.sell : currentPair.buy;
            pos.profit = (pos.type === 'buy' ? 
                (pos.currentPrice - pos.openPrice) : 
                (pos.openPrice - pos.currentPrice)) * pos.amount;
        }
        
        const div = document.createElement('div');
        div.className = 'position-item';
        div.innerHTML = `
            <div class="position-header">
                <div class="position-pair">${pos.pair}</div>
                <div class="position-type ${pos.type}">${pos.type === 'buy' ? 'شراء' : 'بيع'}</div>
            </div>
            <div class="position-info">
                <div class="position-info-item">
                    <span class="position-info-label">المبلغ</span>
                    <span class="position-info-value">${formatMoney(pos.amount)}</span>
                </div>
                <div class="position-info-item">
                    <span class="position-info-label">سعر الفتح</span>
                    <span class="position-info-value">${pos.openPrice.toFixed(4)}</span>
                </div>
                <div class="position-info-item">
                    <span class="position-info-label">الربح/الخسارة</span>
                    <span class="position-info-value" style="color: ${pos.profit >= 0 ? 'var(--success)' : 'var(--accent)'}">
                        ${pos.profit >= 0 ? '+' : ''}${formatMoney(pos.profit)}
                    </span>
                </div>
            </div>
            <button class="position-close" onclick="closePosition('${key}')">إغلاق الصفقة</button>
        `;
        
        container.appendChild(div);
    }
}

window.closePosition = async function(positionKey) {
    showLoading();
    
    try {
        const posRef = ref(database, 'positions/' + currentUser.uid + '/' + positionKey);
        const snapshot = await get(posRef);
        
        if (snapshot.exists()) {
            const pos = snapshot.val();
            
            // Calculate final profit
            const marketPairs = marketData[pos.market];
            const currentPair = marketPairs.find(p => p.pair === pos.pair);
            if (currentPair) {
                pos.currentPrice = pos.type === 'buy' ? currentPair.sell : currentPair.buy;
                pos.profit = (pos.type === 'buy' ? 
                    (pos.currentPrice - pos.openPrice) : 
                    (pos.openPrice - pos.currentPrice)) * pos.amount;
            }
            
            // Update balance
            tradingBalance += pos.amount + pos.profit;
            
            // Add transaction
            const transaction = {
                type: 'trade_close',
                pair: pos.pair,
                tradeType: pos.type,
                amount: pos.amount,
                profit: pos.profit,
                timestamp: Date.now()
            };
            
            const transRef = ref(database, 'transactions/' + currentUser.uid);
            await push(transRef, transaction);
            
            // Remove position
            await set(posRef, null);
            
            await saveUserData();
            updateUI();
            loadOpenPositions();
            
            showToast(`تم إغلاق الصفقة ${pos.profit >= 0 ? 'بربح' : 'بخسارة'} ${formatMoney(Math.abs(pos.profit))}`, pos.profit >= 0 ? 'success' : 'error');
        }
    } catch (error) {
        showToast('فشل إغلاق الصفقة: ' + error.message, 'error');
    } finally {
        hideLoading();
    }
}

// Transactions
async function loadTransactions() {
    const transRef = ref(database, 'transactions/' + currentUser.uid);
    const snapshot = await get(transRef);
    
    if (!snapshot.exists()) return;
    
    transactions = [];
    const data = snapshot.val();
    
    for (let key in data) {
        transactions.push({ id: key, ...data[key] });
    }
    
    transactions.sort((a, b) => b.timestamp - a.timestamp);
    displayRecentTransactions();
}

function displayRecentTransactions() {
    const container = document.getElementById('transactionsList');
    container.innerHTML = '';
    
    if (transactions.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor" opacity="0.3">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z"/>
                </svg>
                <p>لا توجد معاملات بعد</p>
            </div>
        `;
        return;
    }
    
    const recent = transactions.slice(0, 5);
    recent.forEach(trans => {
        const div = createTransactionElement(trans);
        container.appendChild(div);
    });
}

function createTransactionElement(trans) {
    const div = document.createElement('div');
    div.className = 'transaction-item';
    
    let icon = '';
    let title = '';
    let amount = 0;
    let iconClass = '';
    
    if (trans.type === 'send') {
        icon = '<path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>';
        title = 'تحويل إلى ' + trans.recipient.substring(0, 12) + '...';
        amount = -trans.amount;
        iconClass = 'send';
    } else if (trans.type === 'receive') {
        icon = '<path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14h-2v-4H8v-2h4V7h2v4h4v2h-4v4z"/>';
        title = 'استلام من ' + trans.sender.substring(0, 12) + '...';
        amount = trans.amount;
        iconClass = 'receive';
    } else if (trans.type === 'trade_open') {
        icon = '<path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>';
        title = `فتح صفقة ${trans.tradeType === 'buy' ? 'شراء' : 'بيع'} ${trans.pair}`;
        amount = -trans.amount;
        iconClass = 'trade';
    } else if (trans.type === 'trade_close') {
        icon = '<path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>';
        title = `إغلاق صفقة ${trans.pair}`;
        amount = trans.profit;
        iconClass = 'trade';
    }
    
    div.innerHTML = `
        <div class="transaction-icon ${iconClass}">
            <svg viewBox="0 0 24 24" fill="currentColor">${icon}</svg>
        </div>
        <div class="transaction-details">
            <div class="transaction-title">${title}</div>
            <div class="transaction-date">${formatDate(trans.timestamp)}</div>
        </div>
        <div class="transaction-amount ${amount >= 0 ? 'positive' : 'negative'}">
            ${amount >= 0 ? '+' : ''}${formatMoney(Math.abs(amount))}
        </div>
    `;
    
    return div;
}

function loadHistory() {
    const container = document.getElementById('historyList');
    container.innerHTML = '';
    
    if (transactions.length === 0) {
        container.innerHTML = '<div class="empty-state"><p>لا توجد معاملات</p></div>';
        return;
    }
    
    transactions.forEach(trans => {
        const div = createTransactionElement(trans);
        container.appendChild(div);
    });
}

function filterHistory(filter) {
    const container = document.getElementById('historyList');
    container.innerHTML = '';
    
    let filtered = transactions;
    
    if (filter === 'sent') {
        filtered = transactions.filter(t => t.type === 'send');
    } else if (filter === 'received') {
        filtered = transactions.filter(t => t.type === 'receive');
    } else if (filter === 'trading') {
        filtered = transactions.filter(t => t.type.includes('trade'));
    }
    
    if (filtered.length === 0) {
        container.innerHTML = '<div class="empty-state"><p>لا توجد معاملات</p></div>';
        return;
    }
    
    filtered.forEach(trans => {
        const div = createTransactionElement(trans);
        container.appendChild(div);
    });
}

// Utilities
function generateCardNumber() {
    const parts = [];
    for (let i = 0; i < 4; i++) {
        parts.push(Math.floor(Math.random() * 9000 + 1000));
    }
    return parts.join('');
}

function formatCardNumber(number) {
    return number.toString().replace(/(\d{4})(?=\d)/g, '$1 ');
}

function formatMoney(amount) {
    return amount.toLocaleString('ar-AE', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}

function formatDate(timestamp) {
    const date = new Date(timestamp);
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);
    
    if (diffMins < 1) return 'الآن';
    if (diffMins < 60) return `منذ ${diffMins} دقيقة`;
    if (diffHours < 24) return `منذ ${diffHours} ساعة`;
    if (diffDays < 7) return `منذ ${diffDays} يوم`;
    
    return date.toLocaleDateString('ar-AE');
}

function generateQRCode(data) {
    const qr = document.getElementById('qrCode');
    // Using a simple QR code placeholder - in production use QRCode.js library
    qr.innerHTML = `
        <svg viewBox="0 0 200 200" style="width: 100%; height: 100%;">
            <rect width="200" height="200" fill="white"/>
            <text x="100" y="100" text-anchor="middle" font-size="14" fill="black">QR Code</text>
            <text x="100" y="120" text-anchor="middle" font-size="10" fill="gray">${data.substring(0, 8)}...</text>
        </svg>
    `;
}

function toggleCardDetails() {
    const cardNumber = document.getElementById('cardNumber');
    const cardCVV = document.getElementById('cardCVV');
    
    if (cardNumber.textContent.includes('*')) {
        cardNumber.textContent = formatCardNumber(cardDetails.number);
        cardCVV.textContent = cardDetails.cvv;
    } else {
        cardNumber.textContent = '**** **** **** ' + cardDetails.number.slice(-4);
        cardCVV.textContent = '***';
    }
}

// Market price simulation
function simulateMarketPrices() {
    setInterval(() => {
        ['forex', 'crypto', 'stocks'].forEach(market => {
            marketData[market].forEach(pair => {
                const volatility = market === 'crypto' ? 0.02 : (market === 'forex' ? 0.0005 : 0.01);
                const change = (Math.random() - 0.5) * volatility;
                
                pair.buy += pair.buy * change;
                pair.sell += pair.sell * change;
                pair.change = (Math.random() - 0.5) * 5;
            });
        });
        
        // Update open positions
        loadOpenPositions();
    }, 5000); // Update every 5 seconds
}

// Show/Hide functions
function showLogin() {
    loginScreen.classList.add('active');
    appScreen.classList.remove('active');
}

function showApp() {
    loginScreen.classList.remove('active');
    appScreen.classList.add('active');
}

function showLoading() {
    loadingOverlay.classList.add('active');
}

function hideLoading() {
    loadingOverlay.classList.remove('active');
}

function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = `toast ${type} show`;
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}
