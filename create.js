
    let count = 1;

    function addDropdown() {
        count++;
        let dropdownContainer = document.getElementById("dropdownContainer");

        let newDropdown = document.createElement("div");
        newDropdown.classList.add("mt-2");

        newDropdown.innerHTML = `
            <label for="dropdown${count}" class="form-label">Select Option:</label>
            <select class="form-select mb-2" id="dropdown${count}">
                <option value="">Choose...</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
            </select>
            <button class="btn btn-primary" onclick="addDropdown()">Submit</button>
        `;

        dropdownContainer.appendChild(newDropdown);
    }
