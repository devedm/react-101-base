import React, { useState } from 'react'

export default function CardComponent(props){
    let [count, setCount] = useState(0)
    return (
        <div id={props.id} className='card-container'>
            <h3>{props.title}</h3>
                    <img src={props.image}></img>
                    <div className='card-button-container'>    
                        <button className='button-1' onClick={()=>setCount(count+=1)}>+</button>
                        <p>{count}</p>
                        <button className='button-1' onClick={()=>setCount(count-=1)}>-</button>
                    </div>
        </div>
    )

}