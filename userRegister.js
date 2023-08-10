const fs = require("fs");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const htmlContent = fs.readFileSync("userRegister.html", "utf8");
const dom = new JSDOM(htmlContent);
const document = dom.window.document;

const name = document.querySelector('input[name="name"]').value;
const username = document.querySelector('input[name="username"]').value;
const email = document.querySelector('input[name="email"]').value;
const password = document.querySelector('input[name="password"]').value;
const tel = document.querySelector('input[name="tel"]').value;

const userData = {
  name,
  username,
  email,
  password,
  tel,
};

const jsonData = JSON.stringify(userData, null, 2);

fs.writeFile("userData.json", jsonData, "utf8", (err) => {
  if (err) {
    console.error("Error writing to file:", err);
  } else {
    console.log("Data recorded successfully.");
  }
});
