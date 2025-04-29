// ربط الأيقونات

const cartIcon = document.querySelector('.cart-icon');
const signInButton = document.querySelector('.btn-sign-in');

// عند الضغط على ايقونات الهيدر


cartIcon.addEventListener('click', () => {
    openBox('cartBox');
});

signInButton.addEventListener('click', () => {
    openBox('loginBox');
});

// زر تسجيل الدخول
const loginBtn = document.querySelector('.login-btn');
loginBtn.addEventListener('click', () => {
    const username = document.querySelector('#loginBox input[type="text"]').value;
    const password = document.querySelector('#loginBox input[type="password"]').value;

    if (username === "" || password === "") {
        alert("Please fill in all fields! 🫣");
    } else {
        alert(`Welcome, ${username}! 🎉 You are now signed in.`);
        closeBox('loginBox');
        document.querySelector('#loginBox input[type="text"]').value = "";
        document.querySelector('#loginBox input[type="password"]').value = "";
    }
});

// زر "Watch Video"
const watchVideoButton = document.querySelector('.play-viedo-btn');
watchVideoButton.addEventListener('click', () => {
    openBox('videoBox');
});

// دوال فتح وإغلاق الصناديق
function openBox(id) {
    closeAllBoxes();
    const box = document.getElementById(id);
    if (box) {
        box.style.display = 'block';
    }
}

function closeBox(id) {
    const box = document.getElementById(id);
    if (box) {
        box.style.display = 'none';
        // إيقاف الفيديو لما نقفل صندوق الفيديو
        if (id === 'videoBox') {
            const iframe = document.getElementById('videoPlayer');
            iframe.src = iframe.src; // يعيد تحميل الفيديو وبالتالي يتوقف
        }
    }
}

function closeAllBoxes() {
    const boxes = document.querySelectorAll('.popup-box');
    boxes.forEach(box => box.style.display = 'none');
}

// تفعيل دالة الإغلاق من الـ HTML
window.closeBox = closeBox;
