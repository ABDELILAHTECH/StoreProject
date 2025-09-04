import { useContext } from "react"
import { ThemeContext } from "../ThemeContext"
import Cards from "../Components/Cards"
import { CartContext } from "../CartContext"
export default function Cart() {
  const {theme} = useContext(ThemeContext)
  const {cart , totalPrice} = useContext(CartContext)
  return (
    <main  style={{backgroundColor:theme==="light"? "white":"black"}}>
        <h1 style={{textAlign:"center" , margin:"10px 0" }}>{cart.length} Articles | {totalPrice.toFixed(2)} $</h1>
        <Cards products={cart} />
    </main>
  )
}
