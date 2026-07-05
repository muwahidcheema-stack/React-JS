import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/card'

function App() {
  const obj = {
    name:"Muwahid Cheema",
    age: 21
  }
  const arr = [1,2,3,4,5]
  return (
    <>
      <Card channel="Muwahid Cheema"/>
      <Card channel="Tufail Cheema"/>
    </>
  )
}

export default App
