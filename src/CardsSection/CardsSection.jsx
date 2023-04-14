import React, { useState } from 'react'
import './CardSection.css'
import CardComponent from './CardComponent'

export default function CardsSection(props){

    return (
        <div className='card-section'>
            {props.cardsList.map((card)=>(
                <CardComponent title={card.title} image={card.image} id={card.id} />
            ))}
        </div>
    )
}