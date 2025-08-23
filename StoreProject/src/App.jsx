import { BrowserRoutes, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Cart from "./Pages/Cart"
import Favorites from "./Pages/Favorites"
export default function App() {
  return ( 
    <BrowserRoutes>
        <Routes>
          <Route path="*" />
          <Route path="/" element={<Home/>} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
    </BrowserRoutes>
  )
}
