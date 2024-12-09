document.getElementById("loginForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;

    fetch('/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    })
        .then(response => response.text())
        .then(message => {
            document.getElementById("loginMessage").textContent = message;
            document.getElementById("loginMessage").style.color="green" 
        });
});

document.getElementById("registerForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const RegUsername = document.getElementById("registerUsername").value;
    const RegPassword = document.getElementById("registerPassword").value;

    fetch('/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ RegUsername, RegPassword })
    })
        .then(response => response.text())
        .then(message => {
            document.getElementById("registerMessage").textContent = message;
            document.getElementById("registerMessage").style.color = "green";
        });
});
