const darkModeToggle = document.getElementById("toggle");
const themeStyle = document.getElementById("theme-style");

// Check if dark mode preference is stored in local storage
const darkModeEnabled = localStorage.getItem("darkModeEnabled") === "true";

// Function to enable dark mode
function enableDarkMode() {
  themeStyle.href = "dark-mode.css";
  localStorage.setItem("darkModeEnabled", "true");
}

// Function to disable dark mode
function disableDarkMode() {
  themeStyle.href = "style.css";
  localStorage.setItem("darkModeEnabled", "false");
}

// Toggle between dark mode and light mode
darkModeToggle.addEventListener("click", () => {
  if (themeStyle.href.includes("style.css")) {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});

// Set initial theme based on user preference
if (darkModeEnabled) {
  enableDarkMode();
}