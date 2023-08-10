document.addEventListener("DOMContentLoaded", () => {
  fetchUserData();
  displayGreetingMessage();

  const logoutButton = document.getElementById("logout-button");
  logoutButton.addEventListener("click", logout);

  window.addEventListener("beforeunload", beforeUnloadHandler);
});

function fetchUserData() {
  fetch("userData.json")
    .then((response) => response.json())
    .then((data) => {
      const usernameElement = document.getElementById("username");
      usernameElement.textContent = data.name;
    })
    .catch((error) => {
      console.error("Error fetching user data:", error);
    });
}

function displayGreetingMessage() {
  const greetingElement = document.getElementById("greeting-message");
  const hour = new Date().getHours();
  let greetingText;

  if (hour >= 5 && hour < 12) {
    greetingText = "Good morning!";
  } else if (hour >= 12 && hour < 18) {
    greetingText = "Good afternoon!";
  } else {
    greetingText = "Good evening!";
  }

  greetingElement.textContent = greetingText;
}

function logout() {
  // Perform any necessary logout actions (clear session, etc.)

  // Redirect to the login page
  window.location.href = "/login";
}

function beforeUnloadHandler(event) {
  // Perform logout actions before the user leaves the page
  // This can include clearing sessions, notifying the server, etc.
  // For example:
  // logout();
  // Note: Some browsers might not display a custom message
  event.preventDefault();
  event.returnValue = "";
}
