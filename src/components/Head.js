import React from "react";
import '../style/head.css';
import image from '../image/plus.png';

function Head() {
  return(
    <>
    <div className="headBlock">
      <h1 className="todoH1">TO-DO!</h1>
      <input className="plus" type='text' placeholder='할 일을 적어주세요'/>
      <button className="plusBtn"><img src={image}/></button>

    </div>
    </>
  )
}

export default Head;