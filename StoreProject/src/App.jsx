import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Cart from "./Pages/Cart"
import Favorites from "./Pages/Favorites"
import { createContext, useEffect, useState } from "react"

const ProductContext = createContext([])


export default function App() {
  let [storeProducts,setStoreProducts] = useState([])
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())            
            .then(json=>setStoreProducts(json))
           
            
   },[])
    
  useEffect(()=>{
     console.log(storeProducts);

  },[storeProducts]) 
  return ( 
    <ProductContext.Provider value={storeProducts}>
       <BrowserRouter>
          <Routes>
            <Route path="*" />
            <Route path="/" element={<Home/>} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </BrowserRouter>
    </ProductContext.Provider>
  )
}
