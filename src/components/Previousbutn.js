import React from 'react'
import { MdArrowBackIos  } from "react-icons/md";
const Previousbutn =(props)=>{


    return(
      
        
        <div className={props.className} onClick={props.onClick}>
         
            <MdArrowBackIos style={{color:'grey' , fontSize: "30px" }}/>
            </div>
    )
}

export default Previousbutn
