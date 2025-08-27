import { useContext } from "react"
import { ThemeContext } from "../ThemeContext"
import Cards from "../Components/Cards"
import { CartContext } from "../CartContext"
export default function Cart() {
  const {theme} = useContext(ThemeContext)
  const {cart} = useContext(CartContext)
  return (
    <main  style={{backgroundColor:theme==="light"? "white":"black"}}>
        <Cards products={cart} />
    </main>
  )
}
