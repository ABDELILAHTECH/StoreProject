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



export default function App() {
  let [storeProducts,setStoreProducts] = useState([])
  let [filtredProducts,setFiltredProducts] =useState([])
  const categories = ["All","Clothes","Electronics","Jewelery"]
  let [theme,setTheme] = useState(localStorage.getItem("theme") || "light")
  const toggleMode = () => {
     setTheme( prev => prev === "light" ? "dark" : "light" );
  }
    const filterByCategory = (category) => {
       if(category === "All"){
         setFiltredProducts(storeProducts)
       }else if (category === "Clothes") {
          const newList = storeProducts.filter((p) => p.category === "men's clothing" || p.category === "women's clothing")
        console.log(filtredProducts);
       }else if (category === "Electronics" || category === "Jewelery") {
            const newList = storeProducts.filter((p) => p.category === category.toLowerCase())
          setFiltredProducts(newList)
       }
      
       
       
  }

  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())            
            .then(json=>{
                         setStoreProducts(json)
                         setFiltredProducts(json)
                    } 
        )       
   },[])
  useEffect(()=>{
    localStorage.setItem("theme",theme)
  },[theme])   

  return ( 
    <ThemeContext.Provider value={{theme,setTheme,toggleMode}}  >
    <ProductContext.Provider value={{filtredProducts,categories,filterByCategory}}>
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