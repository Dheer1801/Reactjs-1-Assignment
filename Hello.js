import React from "react"
import "./style.css"
import Button from "./Button"
import Label from "./Label"

let Hello = () =>{
    return(
        <div>
              <h1 className="h1">" Hello All "</h1>
              <Label lbltext="Name :-"/> 
              <b style={{margin:"20px"}}>Dheer Patel</b>
              <br/>
              <Label lbltext="Subject :-" /> 
              <b style={{margin:"20px"}}>ReactJs Assignment</b> 
              <br/>    
              <br/>
              <p>This is My First Practical in ReactJs and It's a nice Experience.</p>
              <br/>
              <Button btntext="First"/>
              <Button btntext="Second"/>
              <Button btntext="Third"/>
        </div>
      
    )
}
export default Hello