import { useState } from "react";

export default function RandomColor() {
    const [type, setType]=useState("hex");
    const [color, setColor]=useState("#000");

    function randomColorUtility(length){
        return Math.floor(Math.random()*length)
    }

    function handleHexColor() {
        const hex=[1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
        let hexColor="#";

        for(let i=0;i<6;i++){
            hexColor+= hex[randomColorUtility(hex.length)]
        }
        setColor(hexColor)
    };

    function handleRbgColor() {
        const r=randomColorUtility(256);
        const g=randomColorUtility(256);
        const b=randomColorUtility(256);

        setColor(`rgb(${r},${g},${b})`);
    };

    return (
        <div style={{width:'100vw', height:'100vh', background:color}}>
            <button onClick={() => setType("hex")}>HexColor</button>
            <button onClick={() => setType("rgb")}>RGBColor</button>
            <button 
                onClick={
                    type === "hex" ? handleHexColor: handleRbgColor
                }>RandomColor</button>

            <div style={{display:'flex', justifyContent:'center',alignItems:'center',
             color:'#fff', fontSize:'60px',margingTop:'50px', flexDirection:'column'
            }}>
                <h3>{type === 'rgb' ? 'RGB Color': 'HEX Color' }</h3>
                <h2>{color}</h2>    
            </div>    
        </div>
    )
}