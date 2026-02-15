import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";
import { getDatabase, ref, set, get, update, child } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-database.js";

// إعدادات Firebase الخاصة بك
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

// تهيئة النظام
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);
const googleProvider = new GoogleAuthProvider();

// متغيرات النظام
let currentUser = null;
let userData = {};
let tradeChart = null;

// ==========================================
// 1. إدارة التحميل والتنقل (Optimized Loading)
// ==========================================

function setLoading(isLoading) {
    const loader = document.getElementById('loader');
    if (!isLoading) {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    } else {
        loader.style.display = 'flex';
        loader.style.opacity = '1';
    }
}

function switchSection(sectionId) {
    document.querySelectorAll('section').forEach(sec => {
        sec.classList.remove('section-active');
        sec.classList.add('hidden');
    });
    const target = document.getElementById(sectionId);
    target.classList.remove('hidden');
    target.classList.add('section-active');
}

// ==========================================
// 2. نظام المصادقة (Auth System)
// ==========================================

// مراقب حالة المستخدم (القلب النابض للتطبيق)
onAuthStateChanged(auth, async (user) => {
    if (user) {
        currentUser = user;
        // جلب البيانات بسرعة
        const dbRef = ref(db);
        try {
            const snapshot = await get(child(dbRef, `users/${user.uid}`));
            if (snapshot.exists()) {
                userData = snapshot.val();
                loadDashboardData();
                switchSection('dashboard-section');
            } else {
                // مستخدم جديد
                generateIdentity(user);
                switchSection('onboarding-section');
            }
        } catch (error) {
            console.error(error);
            alert("حدث خطأ في الاتصال");
        }
    } else {
        // غير مسجل دخول - ابق في صفحة الدخول
        switchSection('auth-section');
    }
    // إخفاء اللودر في جميع الحالات بعد انتهاء الفحص
    setLoading(false);
});

// أزرار التسجيل
document.getElementById('google-login').addEventListener('click', () => {
    setLoading(true);
    signInWithPopup(auth, googleProvider).catch(error => {
        setLoading(false);
        alert(error.message);
    });
});

document.getElementById('email-login').addEventListener('click', () => {
    const email = document.getElementById('email').value;
    const pass = document.getElementById('password').value;
    if(!email || !pass) return;
    
    setLoading(true);
    signInWithEmailAndPassword(auth, email, pass)
        .catch(() => {
            // إذا فشل الدخول، حاول إنشاء حساب
            createUserWithEmailAndPassword(auth, email, pass)
            .catch(err => {
                setLoading(false);
                alert(err.message);
            });
        });
});

// ==========================================
// 3. إصدار الهوية (Identity Minting)
// ==========================================

function generateIdentity(user) {
    // خوارزمية توليد بطاقة واقعية
    let cardNum = '4000'; // Visa Prefix
    for(let i=0; i<12; i++) cardNum += Math.floor(Math.random() * 10);
    
    const formattedNum = cardNum.match(/.{1,4}/g).join(' ');
    
    const expDate = new Date();
    expDate.setFullYear(expDate.getFullYear() + 4);
    const expString = `${(expDate.getMonth()+1).toString().padStart(2,'0')}/${expDate.getFullYear().toString().substr(-2)}`;

    // تحديث الواجهة للمعاينة
    document.getElementById('disp-card-number').innerText = formattedNum;
    document.getElementById('disp-card-name').innerText = (user.displayName || "VIP MEMBER").toUpperCase();
    document.getElementById('disp-card-exp').innerText = expString;

    // تجهيز البيانات للحفظ
    userData = {
        uid: user.uid,
        name: user.displayName || user.email.split('@')[0],
        email: user.email,
        cardNumber: cardNum,
        cvv: Math.floor(100 + Math.random() * 900),
        expiry: expString,
        balance: 5000, // بونص ترحيبي
        lastBonus: 0,
        assets: { usd: 0, eur: 0 }
    };
}

document.getElementById('confirm-identity').addEventListener('click', () => {
    setLoading(true);
    set(ref(db, 'users/' + currentUser.uid), userData).then(() => {
        loadDashboardData();
        switchSection('dashboard-section');
        setLoading(false);
    });
});

// ==========================================
// 4. لوحة التحكم (Dashboard Logic)
// ==========================================

function loadDashboardData() {
    // تعبئة البيانات
    document.getElementById('dash-username').innerText = userData.name.split(' ')[0];
    document.getElementById('user-avatar').innerText = userData.name.charAt(0).toUpperCase();
    document.getElementById('total-balance').innerHTML = `${userData.balance.toLocaleString()} <span class="currency">MAD</span>`;
    document.getElementById('usd-balance').innerText = userData.assets.usd.toFixed(2);
    document.getElementById('eur-balance').innerText = userData.assets.eur.toFixed(2);
    
    // QR Code
    document.getElementById('my-qr').src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${userData.cardNumber}`;

    checkBonus();
    if(document.getElementById('trade-tab').style.display !== 'none') initChart();
}

// التبديل بين التبويبات الداخلية
window.switchTab = (tabId) => {
    document.querySelectorAll('.tab-view').forEach(t => t.classList.remove('active-view'));
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    
    document.getElementById(tabId + '-tab').classList.add('active-view');
    event.currentTarget.classList.add('active'); // تمييز الزر المضغوط

    if(tabId === 'trade' && !tradeChart) setTimeout(initChart, 100);
};

// نظام المكافأة
function checkBonus() {
    const now = Date.now();
    const oneDay = 24 * 60 * 60 * 1000;
    const btn = document.getElementById('claim-bonus');
    const msg = document.getElementById('bonus-timer');
    
    if (now - (userData.lastBonus || 0) < oneDay) {
        btn.style.opacity = '0.5';
        btn.style.borderColor = '#333';
        msg.innerText = "عد غداً للمزيد من الأرباح";
        btn.onclick = null;
    } else {
        btn.style.opacity = '1';
        btn.style.borderColor = '#f59e0b';
        msg.innerText = "اضغط للحصول على 1,000,000";
        btn.onclick = claimMoney;
    }
}

function claimMoney() {
    const now = Date.now();
    const newBal = userData.balance + 1000000;
    
    update(ref(db, 'users/' + currentUser.uid), {
        balance: newBal,
        lastBonus: now
    });
    
    userData.balance = newBal;
    userData.lastBonus = now;
    loadDashboardData();
    alert("مبروك! تمت إضافة مليون درهم لرصيدك 💰");
}

// ==========================================
// 5. نظام التداول (Live Trading)
// ==========================================

function initChart() {
    if(tradeChart) return; // منع التكرار
    const ctx = document.getElementById('tradingChart').getContext('2d');
    
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, 'rgba(6, 182, 212, 0.5)');
    gradient.addColorStop(1, 'rgba(6, 182, 212, 0)');

    let dataPoints = [1.10, 1.11, 1.09, 1.12, 1.11, 1.13];
    let labels = ['10:00', '10:05', '10:10', '10:15', '10:20', '10:25'];

    tradeChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'EUR/USD',
                data: dataPoints,
                borderColor: '#06b6d4',
                backgroundColor: gradient,
                borderWidth: 2,
                fill: true,
                tension: 0.4,
                pointRadius: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: { x: { display: false }, y: { display: false } },
            animation: { duration: 0 }
        }
    });

    setInterval(() => {
        const last = dataPoints[dataPoints.length -1];
        const change = (Math.random() - 0.5) * 0.01;
        dataPoints.push(last + change);
        dataPoints.shift();
        tradeChart.update();
    }, 2000);
}

window.trade = (type) => {
    if(userData.balance < 5000) return alert("الرصيد غير كافٍ للمضاربة");
    
    const bet = 5000;
    userData.balance -= bet;
    document.getElementById('trade-result').innerHTML = `<span style="color:yellow">جاري تنفيذ الصفقة...</span>`;
    
    setTimeout(() => {
        const win = Math.random() > 0.4; // نسبة ربح 60%
        if(win) {
            const profit = bet * 1.5;
            userData.balance += profit;
            document.getElementById('trade-result').innerHTML = `<span style="color:#4ade80">صفقة ناجحة! +${profit}</span>`;
        } else {
            document.getElementById('trade-result').innerHTML = `<span style="color:#ef4444">خسارة الصفقة</span>`;
        }
        update(ref(db, 'users/' + currentUser.uid), { balance: userData.balance });
        loadDashboardData();
    }, 2000);
};

window.logout = () => {
    signOut(auth).then(() => location.reload());
};