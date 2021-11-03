import React from "react"
import Alert from "../Alert/Alert"
import Btn from "../Btn/Btn"
const Content=()=>{
    return(
        <>
            <Alert value="This is button" classes="alert-success"/>
            <Btn  getType="btn" classes="btn btn-danger" type="submit" value="Button"/>
            <Btn  getType="link" classes="btn btn-danger" value="Link" href="google.com"/>
        </>
    )
}

export default Content