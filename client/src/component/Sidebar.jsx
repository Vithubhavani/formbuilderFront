import { FaRegMessage } from "react-icons/fa6";
import { CiImageOn } from "react-icons/ci";
import { PiVideoConference } from "react-icons/pi";
import { MdOutlineGif } from "react-icons/md";
import { RxText } from "react-icons/rx";
import { GoHash } from "react-icons/go";
import { CiAt } from "react-icons/ci";
import { LuPhone } from "react-icons/lu";
import { CiCalendar } from "react-icons/ci";
import { MdOutlineStarBorder } from "react-icons/md";
import { IoMdCheckboxOutline } from "react-icons/io";
import styles from './Sidebar.module.css'


export default function Sidebar({ onAddBubble,onAddInput}) {
  return (
    <div className={styles.container}>
      <h2 className={styles.head}>Bubbles</h2>
        <div className={styles.bubbles}>      
     <div className={styles.text} onClick={() => onAddBubble("text", true)}><FaRegMessage size={16} color="#4B83FF"/>Text</div> 
     <div className={styles.text} onClick={() => onAddBubble("img", true)}><CiImageOn size={16} color="#4B83FF"/>Image</div>
     <div className={styles.text}><PiVideoConference size={16} color="#4B83FF"/> Video</div>
     <div className={styles.text}><MdOutlineGif size={35} color="#4B83FF"/>GIF </div>
     </div>
     <h2 className={styles.head}>Inputs</h2>
     <div className={styles.inputs}>
        <div className={styles.text} onClick={()=>onAddInput("text")}><RxText size={14} color="#FFA54C"/>Text</div>
        <div className={styles.text} onClick={()=>onAddInput("number")}><GoHash size={14} color="#FFA54C"/>Number</div>
        <div className={styles.text} onClick={()=>onAddInput("email")}><CiAt size={14} color="#FFA54C"/>Email</div>
        <div className={styles.text} onClick={()=>onAddInput("phone")}><LuPhone size={14} color="#FFA54C"/>Phone</div>
        <div className={styles.text} onClick={()=>onAddInput("date")}><CiCalendar size={14} color="#FFA54C"/>Date</div>
        <div className={styles.text} onClick={()=>onAddInput("rating")}><MdOutlineStarBorder size={14} color="#FFA54C" />Rating</div>
        <div className={styles.text} onClick={()=>onAddInput("button")}><IoMdCheckboxOutline size={14} color="#FFA54C"/>Button</div>
        <div></div>
     </div>
    </div>
  )
}
