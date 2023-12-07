// פונקציה להצגת משתמש מחובר
function displayLoggedUser() {
    let loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
    console.log("Logged User:", loggedUser);
}

// פונקציה להצגת כל המשתמשים ב-Local Storage
function displayAllUsers() {
    let allUsers = JSON.parse(localStorage.getItem("users")) || [];
    console.log("All Users:", allUsers);
}

// פונקציה לקבלת אימייל של משתמש מחובר
function getLoggedUserEmail() {
    let loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
    return loggedUser ? loggedUser.email : null;
}

// פונקציה לבדיקה אם יש משתמש מחובר
function isUserLoggedIn() {
    return getLoggedUserEmail() !== null;
}

// פונקציה לקבלת משתמש לפי אימייל
function getUserByEmail(email) {
    let allUsers = JSON.parse(localStorage.getItem("users")) || [];
    return allUsers.find(function(user) {
        return user.email === email;
    });
}

// פונקציה לבדיקה אם הסיסמה נכונה
function isPasswordCorrect(email, password) {
    let user = getUserByEmail(email);
    return user && user.password === password;
}

// פונקציה להתנתקות מהמערכת
// function logoutUser() {
//     localStorage.removeItem("loggedUser");
// }

// פונקציה להפניה לדף הבית
function redirectToHomePage() {
    window.location.href = "../pages/home.html";
}

// פונקציה לבדיקת תקינות כתובת דוא"ל
function isValidEmail(email) {
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// פונקציה לשליחת הטופס
function submitForm() {
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let wrongData = document.getElementById("wrongData");

    if (!isValidEmail(email.value)) {
        wrongData.innerText = "אנא הזן כתובת דוא\"ל חוקית";
        return;
    }

    let usersFromLocalStorage = JSON.parse(localStorage.getItem("users")) || [];

    for (let userObj of usersFromLocalStorage) {
        if (email.value === userObj.email) {
            if (isPasswordCorrect(email.value, password.value)) {
                localStorage.setItem("loggedUser", JSON.stringify(userObj));
                alert("ברוך הבא למערכת!");
                displayLoggedUser();
                redirectToHomePage();
            } else {
                wrongData.innerText = "סיסמה שגויה";
            }
            return;
        }
    }

    let newUser = { email: email.value, password: password.value };
    usersFromLocalStorage.push(newUser);
    localStorage.setItem("users", JSON.stringify(usersFromLocalStorage));

    alert("משתמש חדש נוצר בהצלחה!");
    displayLoggedUser();
    redirectToHomePage();
}
