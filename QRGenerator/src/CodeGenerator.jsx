import React, { useState } from 'react'
import QRCode from 'react-qr-code'

export const CodeGenerator = () => {
    const [qrCode, setQrCode]=useState("");
    const [input, setInput]=useState("");

    function handleGenerator(){
        setQrCode(input);
    }

    return (
    <div>
        <div>
            <input onChange={(e)=>setInput(e.target.value)}
                type="text" name='qr-code' placeholder='Enter value'/>
                
            <button disabled={input && input.trim() !== "" ? false : true} 
                onClick={handleGenerator}>Generate</button>    
        </div>
        <br/>
        <br/>
        <div>
            <QRCode id="re-code-value" value={qrCode} size={400} bgColor='#fff' />
        </div>
    </div>
  )
}
