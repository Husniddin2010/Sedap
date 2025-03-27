import React from 'react'
import "@/styles/sedap.css";


function Menu(props) {
    return (
        <>
        <div className='home'>
        <img className='home2' src={props.img} alt="" />
        <p>{props.name}</p>
        </div>
        </>

    )  
}
export default Menu