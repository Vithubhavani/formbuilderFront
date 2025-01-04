import axios from "axios"
import { addTokenHeader } from "../helper/helper";


export async function getfolder() {
    const headers = addTokenHeader({ headers: {} });
    const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/form/folder`, { headers });
    return res;
}


export async function postfolder(data){
    const headers=addTokenHeader({headers:{}})

    const res=await axios.post(`${import.meta.env.VITE_BASE_URL}/api/form/folder`,data,{headers})

    return res;
}


export async function deletefolder(id){
    const headers=addTokenHeader({headers:{}})

    const res=await axios.delete(`${import.meta.env.VITE_BASE_URL}/api/form/folder/${id}`,{headers})

    return res;
}

export async function getfolderById(id) {

    const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/form/folder/${id}`);
    return res;
}

export async function getfolderId(id){
    const headers=addTokenHeader({headers:{}})

    const res=await axios.post(`${import.meta.env.VITE_BASE_URL}/api/form/folder/${id}`,{headers})

    return res;
}

