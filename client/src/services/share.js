import axios from "axios"
import { addTokenHeader } from "../helper/helper";


export async function shareByEmail({email, accessType}) {
    const headers = addTokenHeader({ headers: {} });
    const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/form/share/email`,{email, accessType}, { headers });
    return res.data;
}

export const shareByLink = async ({ folderId, formId, accessType }) => {
    try {
      const headers = addTokenHeader({ headers: {} }); // Add token to headers
  
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/form/share/generate-link`, // Adjust URL as per your backend route
        { folderId, formId, accessType },
        { headers }
      );
  
      return response.data; // return the generated link
    } catch (error) {
      throw new Error("Error generating share link");
    }
  };