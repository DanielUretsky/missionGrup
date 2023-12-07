function displayLoggedUser() {
    var loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
    console.log("Logged User:", loggedUser);
}

function displayAllUsers() {
    var allUsers = JSON.parse(localStorage.getItem("users")) || [];
    console.log("All Users:", allUsers);
}

function getLoggedUserEmail() {
    var loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
    return loggedUser ? loggedUser.email : null;
}

function isUserLoggedIn() {
    return getLoggedUserEmail() !== null;
}

function getUserByEmail(email) {
    var allUsers = JSON.parse(localStorage.getItem("users")) || [];
    return allUsers.find(function(user) {
        return user.email === email;
    });
}

function isPasswordCorrect(email, password) {
    var user = getUserByEmail(email);
    return user && user.password === password;
}

function logoutUser() {
    localStorage.removeItem("loggedUser");
}

function redirectToHomePage() {
    window.location.href = "home.html";
}

function submitForm() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    var userExists = existingUsers.some(function(user) {
        return user.email === email;
    });

    if (userExists) {
        if (isPasswordCorrect(email, password)) {
            var loggedInUser = { email: email, password: password };
            localStorage.setItem("loggedUser", JSON.stringify(loggedInUser));
            alert("משתמש נכנס למערכת בהצלחה!");
            displayLoggedUser();
            redirectToHomePage();
        } else {
            alert("סיסמה שגויה!");
        }
    } else {
        var newUser = { email: email, password: password };
        existingUsers.push(newUser);
        localStorage.setItem("users", JSON.stringify(existingUsers));
        alert("משתמש חדש נוצר בהצלחה!");
        displayLoggedUser();
        redirectToHomePage();
    }
}
