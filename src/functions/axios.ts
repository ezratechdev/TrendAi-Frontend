/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import axios from "axios";

export const no_authenication_axios_instance = axios.create({
    // baseURL: 'https://trendai-backend-f8wj.onrender.com/',
    baseURL: 'http://localhost:4500/',
    timeout: 1000,
});