import React, { useState } from 'react'
import './App.css'
function App() {
  const [color,setColor] = useState("white")
  return (
    <>
      <div className='w-full h-screen duration-200 ' style={{backgroundColor: color}}>
        <div className='flex justify-center fixed flex-wrap bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-black px-3 py-2 rounded-xl'> 
            <button onClick = {() => setColor("red")} className='outline-none px-6 py-2 rounded-full text-white' style={{backgroundColor: 'red'}}>Red</button>
            <button onClick = {() => setColor("green")} className='outline-none px-6 py-2 rounded-full text-white' style={{backgroundColor: 'green'}}>Green</button>
            <button onClick = {() => setColor("blue")} className='outline-none px-6 py-2 rounded-full text-white' style={{backgroundColor: 'blue'}}>Blue</button>
            <button onClick = {() => setColor("pink")} className='outline-none px-6 py-2 rounded-full text-white' style={{backgroundColor: 'pink'}}>Pink</button>
            <button onClick = {() => setColor("orange")} className='outline-none px-6 py-2 rounded-full text-white' style={{backgroundColor: 'orange'}}>Orange</button>
            <button onClick = {() => setColor("brown")} className='outline-none px-6 py-2 rounded-full text-white' style={{backgroundColor: 'brown'}}>Brown</button>
            <button onClick = {() => setColor("grey")} className='outline-none px-6 py-2 rounded-full text-white' style={{backgroundColor: 'grey'}}>Grey</button>
          </div>
        </div>
      </div>
    </>
  )
}
export default App
// Onclick needs a function it doesn't need what is returned so we use a callBack in onclick while using in HTML