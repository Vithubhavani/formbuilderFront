import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {fetchEmail} from '../services/user'
import styles from "./ShowForm.module.css";
export default function ShowForm({closeForm}) {
  const[selectedOption, setSelectedOption] = useState("View");
const[email,setEmail]=useState('')
const[emails,setEmails]=useState([])
const [sharedEmails, setSharedEmails] = useState([]);
const [error, setError] = useState("");

  const handleCopy = () => {
    const dashboardUrl = "/dashboard"; // The URL for your dashboard page
    navigator.clipboard.writeText(window.location.origin + dashboardUrl);
    alert("Link copied to clipboard!");
  };

  const fetchSharedEmails = async () => {
    try{
      const response = await fetchEmail();
      setEmails(response.data);
    }catch(error){
      console.log(error)
    }
  }

  useEffect(()=>{
    fetchSharedEmails();
  })

  const handleAddEmail = () => {
    if (emails.includes(email)) {
      setSharedEmails([...sharedEmails, email]);
      setEmail(""); 
      setError("");
      alert("Email added successfully!");
    } else {
      setError("Invalid email. Please enter a registered email.");
      alert("Invalid email. Please enter a registered email.");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.subcontainer}>
<button onClick={closeForm}>X</button>
<h1>Invite by Email</h1>

 <div>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter email"
      />
      <button onClick={handleAddEmail}>Add Email</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
     
      <label>
        Select Option: 
        <select
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
        >
          <option value="View">View</option>
          <option value="Edit">Edit</option>
        </select>
      </label>
      
      <div>
        <button onClick={handleCopy}>Copy Link</button>
   
      </div>

      
    </div>
    </div>
  );
}
