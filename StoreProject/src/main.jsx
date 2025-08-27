import { createRoot } from 'react-dom/client'
import './index.css'
 import { BrowserRouter, Route, Routes } from "react-router-dom"
import {  ProductProvider } from "./ProductContext"
import  { ThemeProvider }  from "./ThemeContext"
import { CartProvider } from './CartContext.jsx'
import Home from "./Pages/Home"
import Cart from "./Pages/Cart"
import Favorites from "./Pages/Favorites"

import NotFound from "./Pages/NotFound"
import App from './App.jsx'

createRoot(document.getElementById('root'))  .render(
        
    <ThemeProvider>
    <ProductProvider>
      <CartProvider>
       <BrowserRouter>
          <App />
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<Home/>} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </BrowserRouter>
       </CartProvider> 
    </ProductProvider>
    </ThemeProvider >
    
)
