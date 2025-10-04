import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setcounter] = useState(5)

    let addValue = () =>{
      setcounter(counter + 1)
    }

    let decValue = () =>{
      if (counter > 0) {
        setcounter(counter - 1)
      }
    } 

  return (
    <>
     <h1>Chai Aur React</h1>
     <button onClick={addValue}> Add Value {counter}</button>
     <br />
     <button onClick={decValue}> Dec Value {counter}</button>
    </>
  )
}

export default App
