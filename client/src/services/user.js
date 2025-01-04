import axios from "axios"
import { addTokenHeader } from "../helper/helper";
export const register=async(data)=> {
    const res = axios.post(`${import.meta.env.VITE_BASE_URL}/api/form/user/signup`, data, {
        headers: {
            'Content-Type': "application/x-www-form-urlencoded"
        }
    });

    return res;
}

export const login = async (data) => {
    const res = axios.post(`${import.meta.env.VITE_BASE_URL}/api/form/user/signin`, data, {
        headers: {
            'Content-Type': "application/x-www-form-urlencoded"
        }
    });
    return res;
}

export const fetchEmail=async()=> {
    const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/form/user/email`, {
    });
    return res;
}


