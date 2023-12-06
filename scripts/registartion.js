import { fetchUsers } from "../utils/fetchUsers.js";

let res = await fetchUsers()
console.log(res);