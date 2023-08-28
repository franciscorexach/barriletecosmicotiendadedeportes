import { Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

function App() {
  
  return (
   <div>
   <NavBar />
   <hr />
   <hr />
   <Routes>
    <Route path="/" element={<ItemListContainer />} />
    <Route path="/category/:id" element={<ItemListContainer />}/>
    <Route path="/item/:id" element={<ItemListContainer />} />
   </Routes>
   </div>
  )
}

export default App
