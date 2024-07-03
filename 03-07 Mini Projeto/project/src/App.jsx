import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import imageHome from '../src/assets/img/image-home.png'
import MenuBar from './components/menuBar'

function App() {
  return (
    <>
      <MenuBar/>
      <main>
        <section className='home'>
          <div className="start">
            <h1>Tornando sua empresa digital com <span>ideias inovadoras.</span></h1>
            <p>Uma mistura de Design, Desenvolvimento Frontend e habilidade profissional que vão destacar seu produto no mercado.</p>
            <button>Instagram</button>
          </div>
          <div className="end">
            <img src={imageHome} alt="" />
          </div>
        </section>
      </main>

    </>
  )
}

export default App
