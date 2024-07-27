import React, { useState, useEffect } from "react"; 
import { Link, Outlet, useParams } from "react-router-dom"; 
 
export const CategoriesPage = () => { 
  const [status, setStatus] = useState(""); 
  const [productData, setProductData] = useState([]); 
  const { categoryname } = useParams(); 
  useEffect(() => { 
    const getProducts = async () => { 
      try { 
        setStatus("loading"); 
        const response = await fetch(`https://dummyjson.com/products`); 
        const jsonresponse = await response.json(); 
        setProductData(jsonresponse.products); 
        setStatus("success"); 
      } catch (error) { 
        setStatus("error"); 
      } 
    }; 
 
    getProducts(); 
  }, []); 
 
  if (status === "loading") { 
    return <h4>Loading ...</h4>; 
  } 
  if (status === "error") { 
    return <h4>Error ...</h4>; 
  } 
  return ( 
    <div> 
      <h1 style={{ textAlign: "center" }}>Product Categories</h1> 
      <div className="container-fluid"> 
        <div className="row"> 
          <div className="col-lg-2"> 
            {productData && productData.length !== 0 ? ( 
              productData.map((item, index) => ( 
                <Link 
                  to={`/categories/${item.id}`} 
                  state={productData} 
                  role="button" 
                  className="card mt-4" 
                  key={index} 
                > 
                  <div className="card-body"> 
                    <strong>{item.title}</strong> 
                  </div> 
                </Link> 
              )) 
            ) : ( 
              <></> 
            )} 
          </div> 
          <div className="col-lg-9"> 
            <Outlet /> 
          </div> 
        </div> 
      </div> 
    </div> 
  ); 
}; 