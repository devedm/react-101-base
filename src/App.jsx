import { useState } from 'react'
import './App.css'
import TopSection from './TopSection'
import CardsSection from './CardsSection/CardsSection'
import SubtitleSection from './SubtitleSection'
import AdsSection from './AdsSection'

function App() {
  const cardsList = [
    {id:1,title:"Gin Tonic",image:"https://cdn.pixabay.com/photo/2017/05/29/13/08/lime-2353741_1280.jpg"},
    {id:2,title:"Penicilina", image:"https://cdn.pixabay.com/photo/2015/11/23/12/13/cocktail-1058237_1280.jpg"},
    {id:3,title:"Purple Bean", image:"https://cdn.pixabay.com/photo/2015/03/30/12/35/mojito-698499_1280.jpg"},
  ]
  const contactInformation = [
    {
      id: 1,
      title:"Acerca de Nosotros",
      information:"Samadhi es el nuevo espacio en el que tus sentidos se envolverán con el sabor de la comida vegetariana y vegana🌱."
    },
    {
      id: 2,
      title:"Horario",
      information:"Lunes, Martes y Miercoles de 3:00pm a 11:00pm | Jueves, Viernes y Sábado de 12:00md a 11:00pm | Domingos de 12:00md a 10:00pm"
    }
  ]

  const adsList = [
    'https://hips.hearstapps.com/pop.h-cdn.co/assets/16/18/1462218807-underground-container.gif?resize=980:*',
    'https://hips.hearstapps.com/pop.h-cdn.co/assets/16/19/1463174384-ewaste.gif?resize=980:*',
    'https://hips.hearstapps.com/pop.h-cdn.co/assets/16/18/1462568956-airport-indy500.gif?crop=0.5333333333333333xw:1xh;center,top&resize=1200:*'
  ]
    
  return (
    <div>
      <TopSection title="Samadhi"/>
      <CardsSection cardsList = {cardsList}/>
      <SubtitleSection contactInformation = {contactInformation}/>
      <AdsSection adsList = {adsList}/>
    </div>
  )
}

export default App
