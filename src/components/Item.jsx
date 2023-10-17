import React from "react";
import { useState } from "react";

function Item (props) {

    const[showInfo, setShowInfo] = useState(false);
    const[color, setColor] = useState(false);

    const toggleInfo = () => {
setShowInfo(!showInfo)
    }
    const handleClick = () =>{
setColor(!color)

    }

    return (
        <>
        <div className="global-container">
<div className="container-1">
        <h1 onClick={toggleInfo}>{props.name}</h1>
        {showInfo && (
        <div className={color === true ? "containerTxt color" : "containerTxt" }>
            <img onClick={handleClick} src={props.images}/>
<h4>Age : {props.age} ans</h4>
<h4>Profession : {props.profession}</h4>
<h4>Ma passion : {props.hobbies}</h4>

</div>
        )}
</div>
</div>
</>
    )


}

export default Item