import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ProductContext } from "./ProductContext"
import  { ThemeContext }  from "./ThemeContext"
import "./App.css"
import Home from "./Pages/Home"
import Cart from "./Pages/Cart"
import Favorites from "./Pages/Favorites"

import { useEffect, useState } from "react"
import NotFound from "./Pages/NotFound"
import Cards from "./Components/Cards"
import Card from "./Components/Card"
import NavBar from "./Components/NavBar"



export default function App() {
  let [storeProducts,setStoreProducts] = useState([])

  let [theme,setTheme] = useState("light")
  const toggleMode = () => {
     setTheme( prev => prev === "light" ? "dark" : "light" );
  }

  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())            
            .then(json=>setStoreProducts(json))       
   })
    

  return ( 
    <ThemeContext.Provider value={{theme,setTheme,toggleMode}}  >
    <ProductContext.Provider value={storeProducts}>
        <header>
           <NavBar />
        </header>
        <main>
          <Cards >
             <Card />
          </Cards>
        </main>
       <BrowserRouter>
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<Home/>} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </BrowserRouter>
    </ProductContext.Provider>
    </ThemeContext.Provider >
  )
}
