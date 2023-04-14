import React from 'react'

export default function AdsSection(props){
    return (
        <div className='ads-container'>
             {props.adsList.map((image)=>(
                <div>
                    <img src={image}></img>
                    <p>Ads</p>
                </div>
            ))}
        </div>
    )
} 