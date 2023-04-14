import React from 'react'

export default function SubtitleSection(props){
    return (
        <div>
            {props.contactInformation.map((item)=>(
                <div className='subtitle-container'>
                    <h2>{item.title}</h2>
                    <p>{item.information}</p>
                </div>
            ))}
        </div>
    )
}