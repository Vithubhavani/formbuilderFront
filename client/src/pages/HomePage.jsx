import homeImg from '../assets/home.png'
import bot from '../assets/bot.png'
import styles from './HomePage.module.css'
import { CiShare1 } from "react-icons/ci";
import {useNavigate} from 'react-router-dom'


export default function HomePage() {

  const navigate=useNavigate()
  function handleClick(){
navigate('/login')
  }
  return (
    <div className={styles.container}>
    <div className={styles.navbar}>
      <div className={styles.form}>
      <img src={bot}/>
      <span>Formbot</span>
      </div>
     <div className={styles.buttons}>
     <button onClick={()=>handleClick()} className={styles.sign}>Sign in</button>
     <button className={styles.create}>Create a FormBot</button>
     </div>
    
    </div>
    <div>
      <img src={homeImg} alt="" className={styles.home}/>
    </div>
    <div className={styles.footer}>
      <div className={styles.footer1}>
        <div className={styles.form1}>
        <img src={bot} alt="" />
        <span className={styles.bot1}>FormBot</span>
        </div>

        <div className={styles.head1}>Made with ❤️ by</div>
        <div className={styles.head1}> @cuvette</div>
       
      </div>

      <div className={styles.footer1}>   
          <div className={styles.head}>Product <CiShare1 /></div>
          <div className={styles.head1}>Status <CiShare1 /></div>
          <div className={styles.head1}>Documentation<CiShare1 /></div>
          <div className={styles.head1}>Roadmap <CiShare1 /></div>
          <div className={styles.head1}>Pricing</div>   
      </div>

      <div className={styles.footer1}>
        <div className={styles.head}>Discord <CiShare1 /></div>
        <div className={styles.head1}>Github repository <CiShare1 /></div>
        <div className={styles.head1}>Twitter <CiShare1 /></div>
        <div className={styles.head1}>LinkedIn <CiShare1 /></div>
        <div className={styles.head1}>OSS Friends</div>
      </div>

      <div className={styles.footer1}>
        <div className={styles.head}>Company</div>
        <div className={styles.head1}> Contacts</div>
        <div className={styles.head1}>Terms of Services</div>
        <div className={styles.head1}>Privacy Policy</div>
      </div>
    </div>
    </div>
  )
}
