document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    if (email && password) {
        const btn = document.querySelector('.login-btn');
        const originalText = btn.innerText;

        btn.innerText = 'Logging in...';
        btn.style.opacity = '0.8';

        setTimeout(() => {
            alert(`Login was successful for: ${email}`);
            document.getElementById('loginForm').reset();
            btn.innerText = originalText;
            btn.style.opacity = '1';
        }, 500);
    }
});

document.querySelector('.forgot-password').addEventListener('click', function(e) {
    e.preventDefault();
    alert("Your reset link has been sent to your email");
    document.getElementById('loginForm').reset();
});