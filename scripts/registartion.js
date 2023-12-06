import { fetchUsers } from "../utils/fetchUsers.js";

let users = await fetchUsers();
let usersFromLocalStorage = JSON.parse(localStorage.getItem("userData"));
console.log(usersFromLocalStorage);

let button = document.getElementById("button");
let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let email = document.getElementById("email");
let password = document.getElementById("password");
let wrongData = document.getElementById("wrongData");

class Users {
    constructor(id, firstName, lastName, email, password) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }
}

function register() {
    if (firstName.value == "" || lastName.value == "" || email.value == "" || password.value == "") {
        wrongData.innerText = "Missing Data"
    }else if(firstName.value == localStorage(firstName)){
        wrongData.innerText = "This user already exists in the system"
    }else {
        let user1 = new Users(users.length + 1, firstName.value, lastName.value, email.value, password.value)
        users.push(user1);
        localStorage.setItem("userData", JSON.stringify(users));
        window.location.href = '../pages/login.html'
    }
}

button.addEventListener("click", register);



