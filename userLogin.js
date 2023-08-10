const fs = require("fs");
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Enter username: ", (username) => {
  readline.question("Enter password: ", (password) => {
    const usersData = readUsersData();
    const user = usersData.users.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      console.log("Login successful.");
    } else {
      console.log("Login failed. Invalid credentials.");
    }
    readline.close();
  });
});

function readUsersData() {
  try {
    const data = fs.readFileSync("users.json", "utf8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading users data:", error);
    return { users: [] };
  }
}
