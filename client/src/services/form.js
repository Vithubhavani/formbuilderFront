import axios from "axios"
import { addTokenHeader } from "../helper/helper";


export async function getform() {
    const headers = addTokenHeader({ headers: {} });
    const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/form/botform`, { headers });
    return res;
}


export async function postform(data){
    const headers=addTokenHeader({headers:{}})

    const res=await axios.post(`${import.meta.env.VITE_BASE_URL}/api/form/botform`,data,{headers})

    return res;
}


export async function deleteform(id){
    const headers=addTokenHeader({headers:{}})

    const res=await axios.delete(`${import.meta.env.VITE_BASE_URL}/api/form/botform/${id}`,{headers})

    return res;
}