const fs = require("fs");

function randomString(length) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";

  for (let i = 0; i < length; i++) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }

  return result;
}


const message = {
    "admin": ["admin123", randomString(16)],
    "wojtek": ["1234", randomString(16)],
};

fs.writeFileSync(
  "accounts/accounts.json",
  JSON.stringify(message, null, 2),
  "utf8"
);