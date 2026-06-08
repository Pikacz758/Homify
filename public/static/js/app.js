const json = require("json")

async function login() {
    const username = document.getElementById('username-login').value;
    const password = document.getElementById('password-login').value;
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
    const result = await response.json("https")
    if (result.success){
        console.log(result)
        window.location.replace("/index.html")
    } else if (!result.success) {
        console.log(result)
    }
}

