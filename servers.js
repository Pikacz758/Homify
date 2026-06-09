const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const fs = require("fs");

const accounts_dir = "accounts/accounts.json"


const users = {
    "admin": "admin123",
    "wojtek": "1234"
};

app.use(express.json());
app.use(express.static('public'));
app.use(cookieParser());


const data = JSON.parse(
  fs.readFileSync(accounts_dir, "utf8")
);
console.log(data);


app.post('/login', (req, res) => {
    const username = req.body.username;  // z formularza
    const password = req.body.password;
    
    if (users[username] && users[username] === password) {
        // Poprawne ustawienie ciasteczka w Node.js / Express
        // maxAge podajemy w milisekundach (tu: 7 dni)
        res.cookie('user', data["admin"][1], { maxAge: 7 * 24 * 60 * 60 * 1000 });
        
        res.json({ success: true, message: "Zalogowano!" });
    } else {
        res.json({ success: false, message: "Błąd logowania" });
    }
});



app.post('/admin-panel', (req, res) => {
    const user = req.cookies.user;
    if (user == data["admin"][1]) {
        console.log(true)
    }
});

// app.post('/register', (req, res) => {

// });



app.listen(3000, '0.0.0.0', () => {
    console.log('✅ Serwer HTML działa na http://localhost:3000');
});