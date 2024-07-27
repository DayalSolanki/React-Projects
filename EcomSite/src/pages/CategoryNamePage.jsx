import React from 'react' 
import { useParams, useLocation } from "react-router-dom" 
export const CategoryPage = () => { 
  const { categoryname } = useParams()  
  const { state } = useLocation() 
  const product = state && state.find(el => el.id === Number(categoryname)) 
  return ( 
    <div className='mt-4 card'> 
        <div className='card-body'> 
            <h3>{product?.title}</h3> 
            <p>{product?.description}</p> 
        </div> 
    </div> 
  ) 
} 