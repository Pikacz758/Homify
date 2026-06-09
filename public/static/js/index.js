// const cookie = document.cookie.split("=")

// const user = document.getElementById("user")
// user.textContent = cookie[1]
// if (cookie[1].length >= 1) {
//     const btn = document.getElementById("login-btn")
//     btn.style.display = 'none';
// }

const json = require("json")

async function admin() {
    
    const response = await fetch('http://192.168.50.215:3000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    });
}

