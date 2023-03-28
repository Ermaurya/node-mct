import React,{ useEffect, useState }  from 'react'
import { Nav, NavLink, NavMenu } from "./NavbarElements";
// import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'

const Navbarx = () => {
    let auth = localStorage.getItem("user");
    const history = useNavigate();

    const userlogout = ()=>{
        localStorage.removeItem("user")
        history("/");
    }

    return (
        <>
        <Nav>
            <NavMenu>
            <NavLink to="/home" activeStyle>
                Home
            </NavLink>
            <NavLink to="/product" activeStyle>
                Products
            </NavLink>
            <NavLink to="/user" activeStyle>
             User
            </NavLink>
            <NavLink to="/contact" activeStyle>
                Contact
            </NavLink>
            <NavLink to="/" activeStyle   onClick={userlogout}>LogOut </NavLink>
            </NavMenu>
        </Nav>
        </>
    );

}

export default Navbarx;
