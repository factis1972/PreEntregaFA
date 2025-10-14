import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';

import Inicio from './pages/Inicio';
import Moda from './pages/Moda';
import ProductoDetalle from './pages/ProductoDetalle';
import Contacto from './pages/Contacto.jsx';


import Header from './DOM/Header.jsx'
import NavBar from './DOM/NavBar.jsx'
import Main from './DOM/Main.jsx'
import Footer from './DOM/Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <NavBar />
      <Main />
      <Routes>
        <Route path='/' element={<Inicio/>}/> 
        <Route path='/moda' element={<Moda/>}/> 
        <Route path='/productos/:id' element={<ProductoDetalle/>}/>
        <Route path='/contacto' element={<Contacto/>}/> 
      </Routes>
      <Footer />
    </>
  )
}

export default App
