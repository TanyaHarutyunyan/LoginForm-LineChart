import React from  "react";
import classes from "./mainForm.module.css"
import FormHeader from "../FormHeader/formHeader";
import FormRegist from "../FormRegist/formRegist";

function MainForm (){
    return (
        <div className={classes.mainForm}>
        <FormHeader />
        <FormRegist />
        </div>
    )
}

export default MainForm