import {useState} from 'react'
import image from '../Assists/signup.png'
import './Signup.css'
import{useNavigate} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
export const Signup = () => {
    const [userName,setUsername]=useState()
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[conformPassword,setConformPassword]=useState()
    const[file,setFile]=useState()
    const navigate=useNavigate()
    const [inpval, setInpval] = useState({
      name: "",
      email: "",
      date: "",
      password: ""
  })

 

  const [data,setData] = useState([]);
  console.log(inpval);

  const getdata = (e) => {
      // console.log(e.target.value);


      const { value, name } = e.target;
      // console.log(value,name);


      setInpval(() => {
          return {
              ...inpval,
              [name]: value
          }
      })

  }

  // const addData = (e) => {
  //     e.preventDefault();

  //     const { name, email, date, password } = inpval;

      // if (name === "") {
      //     toast.error(' name field is requred!',{
      //         position: "top-center",
      //     });
      // } else if (email === "") {
      //      toast.error('email field is requred',{
      //         position: "top-center",
      //     });
      // } else if (!email.includes("@")) {
      //      toast.error('plz enter valid email addres',{
      //         position: "top-center",
      //     });
      // } else if (date === "") {
      //      toast.error('date field is requred',{
      //         position: "top-center",
      //     });
      // } else if (password === "") {
      //      toast.error('password field is requred',{
      //         position: "top-center",
      //     });
      // } else if (password.length < 5) {
      //      toast.error('password length greater five',{
      //         position: "top-center",
      //     });
      // } else {
      //     console.log("data added succesfully");
      //     history("/login")
      //     localStorage.setItem("user",JSON.stringify([...data,inpval]));

      // }

    const register= async(e)=>{
      e.preventDefault();
      const { name, email, date, password } = inpval;
      console.log(file);
        console.log(userName);
        console.log(password);
        console.log(conformPassword);
        let formData=new FormData();
        formData.append("name",userName)
        formData.append("email",email)
        formData.append("password",password)
        formData.append("conformpassword",conformPassword)
        formData.append("image",file)
        // const collectData=async()=>{
        console.log(email,password)
     let results= await fetch("http://localhost:4000/api/v1/register",{
            method: "POST",
          
            body:formData
          
        });
        // .then(res=>res.json()).then(data=>{
        // //   if(data.staus===200){
        // //  alert("registration complect")
        // //   }
        // console.log(data)
        // }
        //   )
        results=await results.json;
        console.log(results)
        
        if(results===inpval){
          toast.error('password field is requred',{
                 position: "top-center",});
        }else{
          const getuserArr = localStorage.setItem("user",JSON.stringify(results));
          console.log(getuserArr);
          navigate('/login')
        }
    // }
  }
    const choosfile=(e)=>{
      setFile(e.target.files[0])
    }
   
    
  return (
    <>
    <div className='Signup_main_container'>
    <div className='Signup_container'>
      <div className='Signup_field'>

      <div className='Signup_input'>
       <div className='input_text'>
        <div className='signup img' >
         <input type="file"onChange={choosfile}/>
        </div>
        <div className='signup username'>
          <input type={'text'} placeholder="enter your userName" onChange={(e)=>{setUsername(e.target.value)}} required/>
        </div>
        <div className='signup email'>

        <input type='email'placeholder='Enter Email Id' onChange={(e)=>{setEmail(e.target.value)}} required />
        </div>
        <div className=' signup password'>
        <input type='text' placeholder='Enter Password' onChange={(e)=>{setPassword(e.target.value)}} />

        </div>
        <div className='signup conf_password'>
        <input type='text' placeholder='Enter Conform Password' onChange={(e)=>{setConformPassword(e.target.value)}} />
        </div>
        {/* <div className='TAC'>
        <input type='checkbox' onChange={(e)=>{setPassword(e.target.value)}} />
        </div> */}
        {/* <span>I Aggery your turm and condition</span> */}
        <div className='signup Signupbtn'>
        <button onClick={()=>register} >Signup</button>
        </div>
        <p className='position'>i have alredy an account <a href='/Login'>login</a></p>
      </div>
       </div>
      <div className='Signup_image'>
        <img alt='' src={image}/>
      </div>
        
      </div>
    </div>
    <ToastContainer />
    </div>
    </>
  )
}
