function OnSubmit(e) {
    e.preventDefault();
    document.getElementById("submitButton").textContent = "Thank you for you're submission!";
}

document.getElementById("questionForm").addEventListener("submit", OnSubmit);
document.getElementById("buildForm").addEventListener("submit", OnSubmit);