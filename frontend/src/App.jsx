import { Route, Routes } from 'react-router-dom'

import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import ReadAll from './components/ReadAll/ReadAll'
import Create from './components/Create/Create'
import ItemCard from './components/ItemCard/ItemCard'
import './App.css'
import MarcaOcean from "./assets/brand.svg"

function App() {
  return (
    <div className="App">
      <Header/>

      <div className="content container mb-3 mt-3">
        <div className='row'>
          <div className='col-4'>
            <ItemCard />
          </div>
          <div className='col-4'>
            <ItemCard />
          </div>
          <div className='col-4'>
            <ItemCard />
          </div>
        </div>
      </div>

    
      <Footer/>
    </div>
  )
}

export default App
