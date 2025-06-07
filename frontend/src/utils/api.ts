import request from "./request"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const createUser = async(payload: any) => {
    return request("POST","/dashboard/users/create", payload)  
} 