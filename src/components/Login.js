import {useState} from 'react';
import './Login.css';
// import { alert } from 'react-alert'
// import { useNavigate } from 'react-router-dom';
import { HomePage } from './HomePage';
import{useNavigate} from 'react-router-dom'

export const Login = () => {
    const[email,setEmail]=useState("Enter Email")
    const[password,setPassword]=useState("Enter Password")
    // const[login,setLogin]=useState("")
    // const navigate=useNavigate();
    const navigate=useNavigate()
    const loginbtn= async()=>{
      console.log(email)
      console.log(password)
    
   let result= await fetch("http://localhost:4000/api/v1/login",{
        method: "POST",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify({
            "email": email,
            "password":password
        }),
    // }).then(res=>res.json()).then((data)=>{
    //     // console.log(data)
    // if(data.success===true){
    //     // setUser()
    //     console.log("success");
    //     window.open({HomePage});
    //     // alert{"user successfull login"};
 });
    result=await result.json;
        console.log(result)
        if(result){
          navigate('/home')
          const getuserArr = localStorage.getItem("useryoutube");
          console.log(getuserArr);
        //   localStorage.setItem("user_login", JSON.stringify(userlogin))
        }
}
  return (
    <div className='Main_container'>
        
       <div className='Container_login'>
             <div className='login_Card'>

            <div className="text-field_email">
                <input type="text" onChange={(e)=>{setEmail(e.target.value)}} id="email"placeholder='enter email' required/>
                {/* <span htmlFor='email' >{email}</span>  */}
            </div>
            <div className="text-field_password">
                <input type="text" onChange={(e)=>{setPassword(e.target.value)}} id='password' placeholder='enter password' required/>
                {/* <span htmlFor='password'>{password}</span>  */}
            </div>
            <div className='login_btn'> 
                <button onClick={loginbtn}>Login</button>
                </div>
                <div className='login_btn'> 
                <p>dont have account <a href='./Signup'> signup</a> </p>
                </div>
             </div>
    </div>
    </div>
  )
}
