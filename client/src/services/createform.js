import axios from "axios"
import { addTokenHeader } from "../helper/helper";


export async function createform(data) {
    const headers = addTokenHeader({ headers: {} });
    const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/form/createform`,data,{ headers });
    return res;
}

export async function shareform(id) {
    const headers = addTokenHeader({ headers: {} });
    const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/form/createform/${id}/share`,{ headers });
    return res;
}
