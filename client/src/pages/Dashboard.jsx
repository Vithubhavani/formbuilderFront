import  { useEffect, useState } from "react"
import Navbar from "../component/Navbar";
import { MdCreateNewFolder } from "react-icons/md";
import styles from './Dashboard.module.css'
import FolderCreate from "../component/Foldercreate";
import {getfolder,deletefolder} from '../services/folder'
import { RiDeleteBin6Line } from "react-icons/ri";
import { getform,deleteform } from "../services/form";
import Formcreate from "../component/Formcreate"
import ShowForm from "../component/ShowForm";
import { useNavigate } from "react-router-dom";


export default function Dashboard() {
  const [bgColor, setBgColor] = useState("black");
  const [color, setColor] = useState("white");
  const [folders, setFolders] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const[botform,setBotForm]=useState([])
  const[showBot,setShowBot]=useState(false)
  const [showShareForm, setShowShareForm] = useState(false);
  const [selectedFormId, setSelectedFormId] = useState(null);
  const [selectedFolderId, setSelectedFolderId] = useState(null);
  const navigate=useNavigate()
  
  
  function handleModeChange(isDarkMode) {
    if (isDarkMode) {
      setBgColor("black");
      setColor("white");
    } else {
      setBgColor("white");
      setColor("black");
    }
  }

  useEffect(() => {
  

    const fetchFolders = async () => {
      try {
        const response = await getfolder();
        setFolders(response.data); 
      } catch (error) {
        console.error("Error fetching folders:", error);
      }
    };

    const fetchForm= async () => {
      try {
        const response = await getform();
        setBotForm(response.data); 
      } catch (error) {
        console.error("Error fetching folders:", error);
      }
    };

    fetchFolders();
    fetchForm();
  }, []);
 
const deleteFold=async(id)=>{
  await deletefolder(id)
   setFolders((prevFolders) => prevFolders.filter((folder) => folder._id !== id));
}




const deleteForm=async(id)=>{
await deleteform(id)
 setBotForm((prevForm) => prevForm.filter((botform) => botform._id !== id));
}

const handleShareClick = () => {
  setShowShareForm(true);
};

const handleNavigate=()=>{
navigate('/formcreate')
}

const handleClose=()=>{
  setShowShareForm(false);
}


  return (
    <div className={styles.container} style={{backgroundColor:bgColor,color:color,height:"100vh"}}>
      <Navbar onModeChange={handleModeChange} onShareClick={handleShareClick}/>
   
      
      
      {showForm && (
        <FolderCreate setShowForm={setShowForm} setFolders={setFolders} />
      )}

      <div className={styles.folders}>
      <div onClick={() => setShowForm(!showForm)} className={styles.create}><MdCreateNewFolder size={16} /> Create a Folder</div>
        <div className={styles.folds}>
          {folders.map((folder) => (
            <div key={folder._id} className={styles.getfold}>
              <div onClick={()=>handleNavigate()} style={{cursor:"pointer"}}>{folder.name}</div> <RiDeleteBin6Line color="red"  onClick={()=>deleteFold(folder._id)}/>
              </div>
          ))}
        </div>
      </div>

     
      {showBot && (
        <Formcreate setShowBot={setShowBot} setBotForm={setBotForm} />
      )}

      <div className={styles.forms}>
      <div className={styles.bot} onClick={()=> setShowBot(!showBot)}><span>+</span> Create a Typebot</div>
        <div className={styles.form}>
          {Array.isArray(botform) && botform.map((bot) => (
            <div key={bot._id} className={styles.getform}>
              <div onClick={()=>handleNavigate()} style={{cursor:"pointer",marginLeft:"40px",marginTop:"130px"}}>{bot.name}</div> <RiDeleteBin6Line onClick={()=>deleteForm(bot._id)} style={{marginBottom:"300px",marginLeft:"100px",color:"red"}}/>
              </div>
          ))}
        </div>
      </div>

  
        <div>
        {showShareForm && (
        <ShowForm closeForm={handleClose}/>
      )}
        </div>
    
  </div>
  )
}
