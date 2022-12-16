import { Route, Routes } from 'react-router-dom'

import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import './App.css'
import ItemList from './components/ItemList/ItemList'
import Cadastro from './components/Cadastro/Cadastro'
function App() {
  return (
    <div className="App">
      <Header/>

      <Routes>
        <Route path="/" element={<ItemList />} />

        { <Route path="/cadastro" element={<Cadastro/>} /> }
      </Routes>

      
    
      <Footer/>
    </div>
  )
}

export default App
