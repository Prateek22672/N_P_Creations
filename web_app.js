document.getElementById("websiteForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let category = document.getElementById("category").value;
    
    // Redirect to a new page with generated content
    window.location.href = `generated.html?category=${category}`;
});
