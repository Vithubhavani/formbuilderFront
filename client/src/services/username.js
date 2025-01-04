import axios from "axios"
import { addTokenHeader } from "../helper/helper";

export async function getUserName() {
    const headers = addTokenHeader({ headers: {} });
    const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/form/username`, { headers });
    return res.data;
}