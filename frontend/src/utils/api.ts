import request from "./request"

const BASE_URL = import.meta.env.VITE_BASE_URL || 'http://localhost:8000/api';
// const env = import.meta.env.VITE_ENV

// const apiUrl = env === "dev" ? BASE_URL : '/api';

// console.log(apiUrl, BASE_URL)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const createUser = async(payload: any) => {
    return request("POST",`${BASE_URL}/dashboard/users/create`, payload)  
} 