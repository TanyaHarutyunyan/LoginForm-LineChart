import React from "react"
import classes from "./formReagist.module.css"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


function FormRegist (){
    let [fullName, setFullName] = useState("") 
    let [emailAddress, setEmailAddress] = useState("")
    let [password, setPassword] = useState("")
    let [fullNameMessage, setFullNameMessage] = useState("")
    let [emailAddressMessage, setEmailAddressMessage] = useState("")
    let [passwordMessage, setPasswordMessage] = useState("")
    let navigate = useNavigate()
 
    function checkFullName (el){
        if (el.split(" ").length >= 2){
            return true
        }
    }
 
    function checkEmailValid (el){
        if (el.split("").includes("@")){
            return true
        }
    }

    function checkPasswordValid (el){
        if (el.length >= 5){
            return true
        }
    }

    function changePage (){
        if (checkEmailValid(emailAddress) && checkPasswordValid(password)){
            navigate("/lineChartWrapper")
        }else {
            if (!checkFullName(fullName)){
                setFullName("")
                setFullNameMessage("Invalid fullname!")
            }else {
                setFullNameMessage("")
            }
            if(!checkEmailValid(emailAddress)){
                setEmailAddress("")
                setEmailAddressMessage("Invalid email address!")
            }else {
                setEmailAddressMessage("")
            }
            if (!checkPasswordValid(password)){
                setPassword("")
                setPasswordMessage("Invalid password!")
            }else {
                setPasswordMessage("")
            }
        }
    }

    return (
        <div className={classes.formRegist}> 
            <div>
                <input type="text" placeholder="Fullname" value={fullName} onChange={(e) => setFullName(e.target.value)}/>
                <p>{ fullNameMessage }</p>
             </div>
            <div>
                <input type="email" placeholder="Email Address" value={emailAddress} onChange={(e) => setEmailAddress(e.target.value)}/>
                <p>{ emailAddressMessage }</p>
                </div>
            <div>
                <input type="password" placeholder="Password" value ={password} onChange={(e) => setPassword(e.target.value)}/>
                <p>{ passwordMessage }</p>
                </div>
                <div className={classes.formSubmit}>
                    <button onClick={(changePage)}>Submit</button>
                </div>
        </div>
    )
}


export default FormRegist 