import axios from "axios";

export const no_authenication_axios_instance = axios.create({
    baseURL: 'http://127.0.0.1:4500',
    timeout: 1000,
});

export const authenicated_axios_instance = axios.create({
    baseURL: 'http://127.0.0.1:4500',
    timeout: 1000,
    headers: { 'Authorization': `Bearer` }
});