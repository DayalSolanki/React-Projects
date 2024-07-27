import { useState, useCallback, useEffect,useRef } from "react"
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed]=useState(false)
  const [charAllowed, setCharAllowed]=useState(false)
  const [password, setPassword]=useState("")

  const passwordRef = useRef(null)

  const passwordGenerator=useCallback(() => {
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numAllowed) str+="0123456789"
    if(charAllowed) str+="!@#$%^&*(){}~`_-+"
    // loop for selection char 
    for(let i=1;i<=length;i++){
      let char=Math.floor(Math.random()*str.length+1)
      pass += str.charAt(char)
    }

    setPassword(pass);

  },[length, numAllowed, charAllowed, setPassword])

  // copy Password to clipboard
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numAllowed, charAllowed, passwordGenerator])

  return (
      <div className="box">
        <h1>Password Generator</h1>
        <div className="textField">
          <input className="textArea" type="text" 
          placeholder="password" value={password} readOnly 
            ref={passwordRef}/>
          <button onClick={copyPasswordToClipboard} >copy</button>
        </div>

        <div className="specialField">
          <div className="length">
            <input type="range" min={6} max={100} value={length}
              className="len" onChange={(e)=>{setLength(e.target.value)}} />
            <label>Length{length}</label>
          </div>

          <div className="checkbox">
            <input type="checkbox" id="numberInput" 
              onChange={() => { setNumAllowed((prev) => !prev)}}
              defaultChecked={numAllowed}
            />
            <label >Numbers</label>
          </div>   

          <div className="checkbox">
            <input type="checkbox" id="characterInput" 
              onChange={() => { setCharAllowed((prev) => !prev)}}
              defaultChecked={charAllowed}
            />
            <label >Characters</label>
          </div>       
        </div>
      </div>
  )
}

export default App
