import React from 'react' 
import { Link } from 'react-router-dom' 
export const Navbar = () => { 
  return ( 
    <div> 
       <div 
style={{width:"100%",padding:"10px",display:"flex",justifyContent:"spacebetween"}}> 
         <div> 
            <h2>React Router Dom</h2> 
         </div> 
         <div> 
            <Link to="/" style={{textDecoration:"none", 
marginRight:"10px"}}>Home</Link> 
            <Link to="about" style={{textDecoration:"none", 
marginRight:"10px"}}>About</Link> 
            <Link to="contact" style={{textDecoration:"none", 
marginRight:"10px"}}>Contact</Link> 
            <Link to="categories" style={{textDecoration:"none", 
marginRight:"10px"}}>Categories</Link> 
         </div> 
       </div> 
    </div> 
  ) 
} 