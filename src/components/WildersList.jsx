import React from "react";
import Item from "./Item";


function WildersList ({Name}) {
return (
<div className="container-WilderList">
{Name.map((student, index) =>(
    <Item
    key={index}
    name={student.name}
    age ={student.age}
    profession = {student.profession}
    hobbies = {student.hobbies}
    images = {student.images}
    
    />
  ))}



</div>

);
}

export default WildersList