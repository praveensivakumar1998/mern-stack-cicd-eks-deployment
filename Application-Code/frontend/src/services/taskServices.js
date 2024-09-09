import axios from "axios";

console.log("Backend URL:", process.env.REACT_APP_BACKEND_URL);
//const apiUrl = "http://65.0.3.30:3500/api/tasks";
const apiUrl = process.env.REACT_APP_BACKEND_URL //"http://localhost:8080/api/tasks";
console.log(apiUrl)
export function getTasks() {
    return axios.get(apiUrl);
}

export function addTask(task) {
    return axios.post(apiUrl, task);
}

export function updateTask(id, task) {
    return axios.put(apiUrl + "/" + id, task);
}

export function deleteTask(id) {
    return axios.delete(apiUrl + "/" + id);
}
