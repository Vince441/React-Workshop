import React from "react";
import { useState } from "react";

function Item (props) {

    const[showInfo, setShowInfo] = useState(false);

    const toggleInfo = () => {
setShowInfo(!showInfo)


    }

    return (
        <>
        <div className="global-container">
<div className="container-1">
        <h1 onClick={toggleInfo}>{props.name}</h1>
        {showInfo && (
        <div className="containerTxt">
<h2>{props.age} ans</h2>
<h3>Profession : {props.profession}</h3>
<h4>Ma passion : {props.hobbies}</h4>
</div>
        )}
</div>
</div>
</>
    )


}

export default Item