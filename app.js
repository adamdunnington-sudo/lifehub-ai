
const greeting = document.querySelector("h1");

const hour = new Date().getHours();

let message = "Good Evening";

if (hour < 12) {
  message = "Good Morning";
} else if (hour < 18) {
  message = "Good Afternoon";
}

greeting.textContent = `👋 ${message}, Adam`;
