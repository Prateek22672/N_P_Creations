// Splash screen logic
const splashScreen = document.getElementById("splash-screen");
splashScreen.style.display = "flex"; // Show splash screen

setTimeout(() => {
  splashScreen.style.opacity = "0"; // Start fading out
  setTimeout(() => {
    splashScreen.style.display = "none"; // Hide splash screen
  }, 1000); // Duration for fade-out transition
}, 1600); // Duration to show splash screen

document.getElementById("year").innerText = localStorage.getItem("selectedYear") || "Not selected";
        document.getElementById("semester").innerText = localStorage.getItem("selectedSemester") || "Not selected";
        document.getElementById("subject").innerText = localStorage.getItem("selectedSubject") || "Not selected";
