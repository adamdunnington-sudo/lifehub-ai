// -------- Greeting --------

const greeting = document.querySelector("h1");

const hour = new Date().getHours();

let message = "Good Evening";

if (hour < 12) {
  message = "Good Morning";
} else if (hour < 18) {
  message = "Good Afternoon";
}

greeting.textContent = `👋 ${message}, Adam`;


// -------- Today's Date --------

const todayDate = document.getElementById("todayDate");

const options = {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric"
};

todayDate.textContent = new Date().toLocaleDateString("en-GB", options);
