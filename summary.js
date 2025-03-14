document.addEventListener("DOMContentLoaded", () => {
  const splashScreen = document.getElementById("splash-screen");
  if (splashScreen) {
    splashScreen.style.display = "flex"; 

    setTimeout(() => {
      splashScreen.style.opacity = "0";
      setTimeout(() => {
        splashScreen.style.display = "none";
      }, 1000);
    }, 1600);
  }

  document.getElementById("year").innerText = localStorage.getItem("selectedYear") || "Not selected";
  document.getElementById("semester").innerText = localStorage.getItem("selectedSemester") || "Not selected";
  document.getElementById("subject").innerText = localStorage.getItem("selectedSubject") || "Not selected";
});
