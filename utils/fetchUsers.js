export async function fetchUsers() {
    let users = new Promise((res) => {
        let xhr = new XMLHttpRequest();

        xhr.open(`GET`, '../data/users.json', true);

        xhr.onload = function () {
            let response = JSON.parse(this.responseText);
            res(response.users);
            localStorage.clear();
            localStorage.setItem("userData", JSON.stringify(response.users));
        }
        xhr.send();
    });
    return users;
}