import React from 'react'

function MenuItem({image,name,price,addCart}) {
    return (
        <div className="menuItem">
         <div style={{backgroundImage:`url(${image})`}}></div>   
       
        <h1>{name}</h1>
        <p>{price}</p>
        <button onClick={addCart}>ADD </button>
       
        </div>
    )
}

export default MenuItem
