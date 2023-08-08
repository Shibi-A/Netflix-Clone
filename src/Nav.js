import React, { useState, useEffect } from 'react'
import "./Nav.css"
import {useNavigate} from "react-router-dom"

function Nav() {
    const [show, handleShow] = useState(false);
    const navigate = useNavigate();

    const transitionNavBar = () => {
        if(window.scrollY > 100) {
            handleShow(true);
        }
        else{
            handleShow(false);
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener('scroll', transitionNavBar); }, []);    
    
    return (
        <div className="nav">
            <div className="net_black">
            <div className="nav_contents">
            <img
            onClick = {() => navigate("/")}
            className = "net_logo" 
            src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                alt ="" />
            <img
            onClick = {() => navigate("./profile")}
            className = "net_avatar" 
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                alt ="" />   
           
           </div>
           </div>
        </div>
    );
}
export default Nav