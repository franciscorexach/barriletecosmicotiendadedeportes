import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

function App() {
  
  return (
   <div>
   <NavBar />
   <ItemListContainer greeting="Bienvenidos" message="La vida no es la misma sin fútbol"/>
   </div>
  )
}

export default App
