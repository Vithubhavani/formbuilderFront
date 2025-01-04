import styles from './LoginForm.module.css'
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom'
import halfcirc from '../assets/halfcircle.png'
import halfcirc1 from '../assets/halfcircle2.png'
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import traingle from '../assets/triangle.png'
export default function Form({
    email,
    setEmail,
    password,
    setPassword,
    error,
    setError,
    submitHandle
  }) 
  {

    const navigate=useNavigate()

    function back(){
      navigate('/')
    }
    return (
      <div className={styles.container}>
       <FaArrowLeft onClick={()=>back()} size={20} style={{marginBottom:"80px",marginTop:"30px",marginLeft:"100px",cursor:"pointer"}}/>
         <div className={styles.first}>
           <img src={traingle} alt="" className={styles.trang}/>
         <div>
      <div className={styles.inputContainer}>
        <p className={styles.head}>Email</p>
        <input type="email"
        value={email}
        placeholder="Email"
       className={styles.name}
        onChange={(e) => setEmail(e.target.value)}/>
         
         <div>
        {error?.email && <p style={{fontSize:'15px',color:"red"}}>Email Required</p>}
        </div>
        </div>

        <div className={styles.in2Container}>
        <p className={styles.head}>Password</p>
        <input type="password"
        value={password}
        placeholder="Password"
        className={styles.name}

        onChange={(e) => setPassword(e.target.value)} />
               
               
          <div>
        {error?.password && <p style={{fontSize:'15px',color:"red"}}>Password required </p>}
        </div>
        </div>
        <button onClick={submitHandle} className={styles.register}>Login</button>
        <p className={styles.or}>OR</p>
        <button className={styles.gog}><FcGoogle size={23} style={{backgroundColor:"white",borderRadius:"12px"}}/>Sign in with Google</button>
        <div className={styles.bottom}>
        <p className={styles.q}>Have no account yet?</p>
        <Link to={'/register'} className={styles.log}>Register</Link>
        </div>
        </div>
        <img src={halfcirc} alt="" className={styles.circ}/>
       
        </div>
        <img src={halfcirc1} alt="" className={styles.circ1}/>
     
      </div>
    )
  }
  