import { useState,useEffect } from "react"
import styles from "./Navbar.module.css"
import { getUserName } from "../services/username"
import { useNavigate } from "react-router-dom";



export default function Navbar({onModeChange,onShareClick}) {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const[username,setuserName]=useState('')
const navigate=useNavigate()

  const fetchUser = async () => {
    try{
      const response = await getUserName();
      setuserName(response.name)
    }catch(error){
      console.log(error)
    }
  }
  useEffect(() => {
    fetchUser();
  },[])

  function navigateSettings(){
 navigate('/settings')
  }

  const logOut=()=>{
    localStorage.removeItem('token')
    navigate('/')
  }

  function changeColor() {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    onModeChange(newMode); 
  }
  function handleShareClick() {
    const formLink = `${window.location.origin}/form/share/${formId}`;  // formId should be the ID of the created form
  
    
    navigator.clipboard.writeText(formLink).then(() => {
      alert('Form link copied to clipboard!');
    }).catch((err) => {
      console.error('Failed to copy the link: ', err);
    });
  }
 
  
  return (
    <div className={styles.container}>
      <select  className={styles.select} onChange={(e) => {
    const selectedOption = e.target.value;
    if (selectedOption === "Settings") {
      navigateSettings();
    } else if (selectedOption === "Log Out") {
      logOut(); 
    }
  }}>
        <option>{username?`${username} workspace`:""}</option>
     
        <option >Settings</option>
        <option >Log Out</option>
      </select>
      <p></p>
      <div className={styles.button}>
     <p>light</p>
    <button onClick={changeColor} style={{
          width: "51px",
          height: "21px",
          borderRadius: "20px",
          backgroundColor: "#1A5FFF", 
          border: "2px solid transparent",
          position: "relative",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: isDarkMode ? "flex-end" : "flex-start",
          padding: "5px",
          transition: "all 0.3s ease",  
        }}>  
             <div
          style={{
            width: "15px",
            height: "15px",
            borderRadius: "50%",
            backgroundColor: "white", 
            transition: "all 0.3s ease",
          }}
        ></div>
      </button>
      <p>Dark</p>
      </div>

      <button className={styles.share} onClick={onShareClick}>Share</button>
    </div>
  )
}
