import { useState } from 'react'
import { useCallback } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import './App.css'
function App() {
  const [length, setLength] = useState(8)
  const [num, setNumber] = useState(false)
  const [char, setChar] = useState(false)
  const [password, setPassword] = useState("")
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (num) {
      str += "0123456789";
    }
    if(char){
      str += "!@#$%^&*(){}-_=+[]:;,.~`"
    }
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length,num,char,setPassword])

  useEffect(() => {
    passwordGenerator()
  } , [length,num,char,passwordGenerator])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,length)
    window.navigator.clipboard.writeText(password)
  },[password])

  return (
    <>
      <div className='flex flex-col justify-center items-center w-full max-w-md shadow-md rounded-lg px-4 py-4 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-4xl mb-8 text-white'>Password Generator</h1>
        <div className='flex shadow rounded-lg mb-4 bg-white overflow-hidden w-full'>
          <input type="text" value={password} className='outline-none text-left w-full py-2 pl-4' placeholder='Password' readOnly ref={passwordRef}/>
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 border-l border-transparent hover:bg-white hover:text-blue-700 hover:border-blue-700  transition-colors' onClick={copyPasswordToClipboard}><strong>Copy</strong></button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" min={6} max={50} value={length} onChange={(e) => {setLength(parseInt(e.target.value))}} className='cursor-pointer' />
            <label> Length: {length}  </label>
          </div>
          <div className='flex text-sm gap-x-2'>
            <input type="checkbox" defaultChecked={num} id='numberInput' onChange={() => {setNumber((prev) => !prev)}}/>
            <label> Number </label>
          </div>
          <div className='flex text-sm gap-x-2' >
            <input type="checkbox" defaultChecked={char} id="charInput" onChange={() => {setChar((prev) => !prev)}}/>
            <label> Character </label>
          </div>
        </div>
      </div>
    </>
  )
}
export default App