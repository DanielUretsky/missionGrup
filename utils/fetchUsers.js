 export function fetchUsers(){
    let xhr= new XMLHttpRequest();

    xhr.open(`GET`, '../utils/fetchUsers.js', true);

    xhr.onload = function(){

    }

    xhr.send();
}