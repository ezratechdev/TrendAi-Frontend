import axios from "axios";

export const no_authenication_axios_instance = axios.create({
    baseURL: 'https://trendai-backend-f8wj.onrender.com/',
    timeout: 1000,
});