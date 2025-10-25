import { useState } from 'react'

function App() {
  const [color, setColor] = useState("black")

  return (
    <div className = "w-full h-screen duration-800" style = {{backgroundColor: color}}>
      <div className = "fixed flex flex-wrap justify-center bottom-15 inset-x-0 px-2">
        <div className = "flex flex-wrap justify-center gap-20 bg-white px-3 py-1 rounded-3xl">
          <button onClick= {() => setColor("red")}
          className = "outline-none px-4 rounded-2xl text-white shadow-lg" style = {{backgroundColor: "red"}}>Red</button>  
          <button onClick= {() => setColor("blue")} className = "outline-none px-4 rounded-2xl text-white shadow-lg" style = {{backgroundColor: "blue"}}>Blue</button>
          <button onClick= {() => setColor("green")} className = "outline-none px-4 rounded-2xl text-white shadow-lg" style = {{backgroundColor: "green"}}>Green</button>
          <button onClick= {() => setColor("purple")} className = "outline-none px-4 rounded-2xl text-white shadow-lg" style = {{backgroundColor: "Purple"}}>Purple</button>
          <button onClick= {() => setColor("yellow")} className = "outline-none px-4 rounded-2xl text-white shadow-lg" style = {{backgroundColor: "Yellow"}}>Yellow</button>
          <button onClick= {() => setColor("pink")} className = "outline-none px-4 rounded-2xl text-white shadow-lg" style = {{backgroundColor: "pink"}}>Pink</button>
        </div>
      </div>
    </div>
  )
}

export default App
