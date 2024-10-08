import React from "react";
import { useState, useEffect } from "react";

const LoadData = () => {
    const [loading, setLoading]=useState(false);
    const [products, setProducts]=useState([]);
    const [count, setCount]=useState(0);

    async function fetchProducts() {
        try{
            const response=await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count*20}`);
            const result = await response.json();
            
            if(result && result.products && result.products.length){
                setProducts(result.products);
                setLoading(false);
            }
            console.log(result);
        }catch(e){
            console.log(e);
            setLoading(false)
        }
    }

    useEffect(()=>{
        fetchProducts();
    },[count]);

    if(loading){
        return<div>Loading data wait...</div>
    }

    return (
        <div className="container">
            <div className="product-container">
                {products && products.length ? products.map((item)=>(
                    <div className="product" key={item.id}>
                        <img src={item.thumbnail} alt={item.title}/>
                        <p>{item.title}</p>
                        <p>{item.warrantyInformation}</p>
                    </div>
                )):null}
            </div>
            <div>
                <button onClick={()=> setCount(count+1) }>More</button>
            </div>
        </div>
    )   
}    
    export default LoadData;