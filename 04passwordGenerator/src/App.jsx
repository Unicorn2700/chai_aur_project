import { useCallback, useEffect, useState, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [password, setPassword] = useState(null)
  
  const [numberAllowed, setnumberAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState("")

  const passGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*():{}"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);

      pass += str.charAt(char);
    }
    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])

  useEffect(() => {passGenerator();
  }, [length, numberAllowed, charAllowed, setPassword])

  const passwordRef = useRef(null)

  const copyPassword = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

   return (
    <div className="w-full h-screen bg-black flex items-center justify-center">
      <div className="bg-[#1e1e1e] p-6 rounded-xl shadow-lg w-[420px] text-center">
        {/* Title */}
        <h1 className="text-white text-xl font-semibold mb-4">
          Password Generator
        </h1>

        {/* Password box + copy button */}
        <div className="flex items-center mb-4">
          <input
            type="text"
            value={password}
            placeholder='Password'
            readOnly
            ref={passwordRef}
            className="flex-1 bg-transparent border border-gray-600 text-orange-400 px-3 py-2 rounded-l-md focus:outline-none"
          />
          <button 
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-md"
          onClick={copyPassword}>
            copy
          </button>
        </div>

      {/* slider */}
        <div className="flex items-center gap-3 mb-2">
          <input
            type="range"
            min="4"
            max="100"
            value={length}
            className="w-full accent-blue-600 cursor-pointer"
            onChange={(e) => {setLength(e.target.value)}}
          />
        </div>

        {/* Options */}
        <div className="flex items-center justify-between text-orange-400 text-sm">
          <span>Length : {length}</span>
          <div className="flex items-center gap-3">
            <label className="flex items-center gap-1">
              <input 
              type="checkbox" 
              defaultChecked = {numberAllowed}
              className="accent-blue-600"
              onChange={() => {setnumberAllowed((prev) => !prev)}}
              />
              <span>Numbers</span>
            </label>
            <label className="flex items-center gap-1">
              <input
                type="checkbox"
                className="accent-blue-600"
                defaultChecked = {charAllowed}
                onChange={() => {setcharAllowed((prev) => !prev)}}
              />
              <span>Characters</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App
