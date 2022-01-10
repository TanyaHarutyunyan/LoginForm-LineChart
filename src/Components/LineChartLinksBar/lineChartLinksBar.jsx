import React from "react";
import { NavLink } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import "./lineChartLinksBar.css"
function LineChartLinksBar (){
    let navigate = useNavigate()
    function changeConfirmed (){
        navigate("/confirmed")
        console.log("Okay")
    }

    function changeDeaths (){
        navigate("/deaths")
    }
    
    return (
         <div className="links"> 
            <div className="navLink"><NavLink to="/confirmed" onClick={changeConfirmed}>Confirmed</NavLink></div>
            <div className="navLink"><NavLink to="/deaths" onClick={changeDeaths}>Deaths</NavLink></div>
         </div>
     )
}

export default LineChartLinksBar