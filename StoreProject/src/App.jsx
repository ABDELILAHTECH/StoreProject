import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Cart from "./Pages/Cart"
import Favorites from "./Pages/Favorites"
import { createContext } from "react"
export default function App() {
  const ProductContext = createContext([])

  return ( 
    <ProductContext.Provider >
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
