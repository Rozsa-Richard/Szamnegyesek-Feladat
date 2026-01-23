import axios from "axios";

const baseURL = "http://localhost:4444";

const apiClient = axios.create({
    baseURL,
    headers: {
        "Content-Type": "application/json"
    }
});

export default apiClient;