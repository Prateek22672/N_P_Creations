// Splash screen logic
const splashScreen = document.getElementById("splash-screen");
splashScreen.style.display = "flex"; // Show splash screen

setTimeout(() => {
  splashScreen.style.opacity = "0"; // Start fading out
  setTimeout(() => {
    splashScreen.style.display = "none"; // Hide splash screen
  }, 1000); // Duration for fade-out transition
}, 1600); // Duration to show splash screen

// Dropdown logic
function addDropdown() {
  let dropdownContainer = document.getElementById("dropdownContainer");

  // Check if year is selected
  let yearDropdown = document.getElementById("dropdown1");
  let selectedYear = yearDropdown.value;
  if (selectedYear === "") {
    alert("Please select a year first.");
    return;
  }

  removeExistingButton();

  let newDropdown = document.createElement("div");
  newDropdown.classList.add("mt-2");

  newDropdown.innerHTML = `
        <label for="semesterDropdown" class="form-label">Select Semester:</label>
        <select class="form-select mb-2" id="semesterDropdown">
            <option value="">Choose...</option>
            <option value="1">Semester 1</option>
            <option value="2">Semester 2</option>
            <option value="3">Semester 3</option>
            <option value="4">Semester 4</option>
            <option value="5">Semester 5</option>
            <option value="6">Semester 6</option>
            <option value="7">Semester 7</option>
            <option value="8">Semester 8</option>
        </select>
    `;

  dropdownContainer.appendChild(newDropdown);

  createButton("Submit", addSubjectDropdown);
}

// Function to add subject dropdown
function addSubjectDropdown() {
  let semesterDropdown = document.getElementById("semesterDropdown");
  let selectedSemester = semesterDropdown.value;

  if (selectedSemester === "") {
    alert("Please select a semester first.");
    return;
  }

  let dropdownContainer = document.getElementById("dropdownContainer");

  removeExistingButton();

  let newDropdown = document.createElement("div");
  newDropdown.classList.add("mt-2");

  newDropdown.innerHTML = `
        <label for="subjectDropdown" class="form-label">Select Subject:</label>
        <select class="form-select mb-2" id="subjectDropdown">
            <option value="">Choose...</option>
            <option value="Computer Networks">Computer Networks</option>
            <option value="Data Structures">Data Structures</option>
            <option value="COA">COA</option>
            <option value="OE">OE</option>
            <option value="Operating System">Operating System</option>
        </select>
    `;

  dropdownContainer.appendChild(newDropdown);

  createButton("Save", saveSelection);
}

// Function to save and redirect
function saveSelection() {
  let yearDropdown = document.getElementById("dropdown1");
  let semesterDropdown = document.getElementById("semesterDropdown");
  let subjectDropdown = document.getElementById("subjectDropdown");

  let selectedYear = yearDropdown.value;
  let selectedSemester = semesterDropdown.value;
  let selectedSubject = subjectDropdown.value;

  if (selectedSubject === "") {
    alert("Please select a subject first.");
    return;
  }

  // Store values in localStorage
  localStorage.setItem("selectedYear", selectedYear);
  localStorage.setItem("selectedSemester", selectedSemester);
  localStorage.setItem("selectedSubject", selectedSubject);

  // Redirect to summary page
  window.location.href = "summary.html";
}

// Utility function to create a button dynamically
function createButton(text, callback) {
  let dropdownContainer = document.getElementById("dropdownContainer");

  let button = document.createElement("button");
  button.classList.add("btn", "btn-primary", "mt-2");
  button.textContent = text;
  button.id = "actionButton";
  button.onclick = callback;

  dropdownContainer.appendChild(button);
}

// Utility function to remove existing action button
function removeExistingButton() {
  let existingButton = document.getElementById("actionButton");
  if (existingButton) {
    existingButton.remove();
  }
}

// Utility function to create a button dynamically with custom styles
function createButton(text, callback) {
  let dropdownContainer = document.getElementById("dropdownContainer");

  let button = document.createElement("button");
  button.classList.add("btn", "mt-2"); // Keep Bootstrap spacing class
  button.textContent = text;
  button.id = "actionButton";
  button.style.backgroundColor = "black"; // Set black background
  button.style.color = "white"; // Set white text
  button.style.border = "none"; // Remove default border
  button.style.padding = "10px 20px"; // Add padding for better appearance
  button.style.cursor = "pointer"; // Make it look clickable

  button.onclick = callback; // Assign the function

  dropdownContainer.appendChild(button);
}
