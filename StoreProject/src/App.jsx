import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ProductContext } from "./ProductContext"
import Home from "./Pages/Home"
import Cart from "./Pages/Cart"
import Favorites from "./Pages/Favorites"

import { useEffect, useState } from "react"
import NotFound from "./Pages/NotFound"
import Cards from "./Components/Cards"
import Card from "./Components/Card"



export default function App() {
  let [storeProducts,setStoreProducts] = useState([])
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())            
            .then(json=>setStoreProducts(json))       
   })
    

  return ( 
    <ProductContext.Provider value={storeProducts}>
       <Cards >
          <Card />
       </Cards>
       <BrowserRouter>
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<Home/>} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </BrowserRouter>
    </ProductContext.Provider>
  )
}
