
import React, { useState } from 'react'
import './App.css';
import { Login } from './components/Login';
import { Signup } from './components/Signup';
import { HomePage } from './components/HomePage';
import  HomePage2  from './components/Homepage2';
import { ProductCart } from './components/ProductCart';
import { Carouse } from './components/Carouse';
import { Routes, Route, Navigate } from "react-router-dom";
import Contact from './components/Contact';
import User from './components/User';
import About from './components/About';
import Product from './components/Product';
import Navbarx from './components/Navbarx';
import Privatedata from './components/Privatedata';

const getLocalStorageData = () => {
  let userLS = localStorage.getItem("user");
  if (userLS) {
    return JSON.parse(localStorage.getItem("user"));
  } else {
    return null;
  }
}
function App() {
  const [user, setUser] = useState(getLocalStorageData);
  // let auth = localStorage.getItem("user");
  return (
    <div >
     {/* <Signup/> */}
     {/* <Login/> */}
     {/* <ProductCart/> */}
     {/* <HomePage/> */}
     {/* <Carouse/> */}
     {/* <Contact/>
     <User/>
     <About/>
     <Product/> */}
     <Navbarx/>
     <Routes>

        <Route path="/" element={<Signup  getLocalStorageData={getLocalStorageData} user={user} setUser={setUser} />} />

        <Route path="/Signup" element={
          user === null ? <Signup /> : <Navigate to="/"/>
        } />
        
        <Route path="/Login" element={user === null ? <Login /> : <Navigate to="/home" />
        } />
        <Route element={<Privatedata/>}>

        <Route path='/home' element={ <HomePage2/>} />
        <Route path='/user' element={<User/>} />
        <Route path='/product' element={<Product/>} />
        <Route path='/contact' element={<Contact/>} />
     </Route>
      </Routes>
    </div>
  );
}

export default App;
