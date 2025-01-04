import styles from './RegisterForm.module.css'
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom'
import traingle from '../assets/triangle.png'
import halfcirc from '../assets/halfcircle.png'
import halfcirc1 from '../assets/halfcircle2.png'
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

export default function Form({
  name,
  setName,
  email,
  setEmail,
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
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
      <div className={styles.in1Container}>
       
          <p className={styles.head}>Username</p>
      <input type="text"
      value={name}
      placeholder="Name" 
      className={styles.name}
      onChange={(e) => setName(e.target.value)}/>
   
      
      <div className={styles.error}>
      {error?.name&&<p style={{fontSize:'15px',color:"red"}}>Name is required</p>}
      </div>
      </div>
    <div className={styles.inputContainer}>
     <p className={styles.head}>Email</p>
      <input type="email"
      value={email}
      placeholder="Email"
      className={styles.name}
      onChange={(e) => setEmail(e.target.value)}/>
    
      
      <div className={styles.error}>
      {error?.email && <p style={{fontSize:'15px',color:"red"}}>Enter valid email address</p>}
      </div>
      </div>
      <div className={styles.in2Container}>
       <p className={styles.head}>Password</p> 
      <input type="password"
      value={password}
      placeholder="Password"
      className={styles.name}
      onChange={(e) => setPassword(e.target.value)} />
      
       

       <div className={styles.error}>
      {error?.password.lengths && <p style={{fontSize:'15px',color:"red"}}>Password must be atleast 8 characters long </p>}
      {error?.password.specialChar && <p style={{fontSize:'15px',color:"red"}}>Password must contain atleast one special character</p>}
      {error?.password. Upppercases && <p style={{fontSize:'15px',color:"red"}}>Password must contain atleast one uppercase character</p>}
     </div>
     </div>
     <div className={styles.in3Container}>
      <p className={styles.head}>Confirm Password</p>
      <input type="password"
      value={confirmPassword}
      placeholder="Confirm Password"
      className={styles.name}
      onChange={(e) => setConfirmPassword(e.target.value)} />
    
       
       <div className={styles.error}>
      {error?.confirmPassword &&<p style={{fontSize:'15px',color:"red"}}>Password do not match</p>}
      </div>
      </div>

      <button onClick={submitHandle} className={styles.register}>Register</button>
      <p className={styles.or}>OR</p>
      <button className={styles.gog}><FcGoogle size={23} style={{backgroundColor:"white",borderRadius:"12px"}}/>Sign in with Google</button> 
      <div className={styles.bottom}>
      <p className={styles.q}>Have an account?</p>
      <Link to={'/login'} className={styles.log}>Login</Link>
      </div>
</div>
      <img src={halfcirc} alt="" className={styles.circ}/>
      </div>
      <img src={halfcirc1} alt="" className={styles.circ1}/>
    </div>
  )
}
