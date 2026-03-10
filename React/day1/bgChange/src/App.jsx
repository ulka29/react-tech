import { useState } from 'react'
import Logo from './assets/logo.svg'
import image from './assets/butterfly.jpg'
import './App.css'

function App() {
  const [color, setColor] = useState("white")

  return (
    <>
      <div className='w-full h-screen duration-200'
      style={{background: color}}>
        
          <img src={Logo} className="logo" alt="Vite logo" />
          <img src={image} className="image" alt="React logo" />
        
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 bg-transparent'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
            <button onClick={()=>setColor("#E0BDB6")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{background:"#E0BDB6"}}>Red</button>
            <button onClick={()=>setColor("#D3F2D4")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{background:"#D3F2D4"}}>Green</button>
            <button onClick={()=>setColor("#F1D3F2")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{background:"#F1D3F2"}}>Pink</button>

          </div>
        </div>
      </div>

      <div className='w-full h-screen duration-200'
      style={{background: color}}
      ></div>

    </>
  )
}

export default App
