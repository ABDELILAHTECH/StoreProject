import { useContext } from "react"
import styles from "./Styles/Card.module.css" 
import { Heart } from "lucide-react"
import { ThemeContext } from "../ThemeContext"
import { CartContext } from "../CartContext"

export default function Card( { product } ) {
  

  const {theme} = useContext(ThemeContext);
  const {cart,addToCart} = useContext(CartContext);

  const addToCartHandleClick = () => {
        addToCart(product)
        console.log(cart);
        
  }
  const toggleFontColor = () =>  theme==="light" ? "black": "white"
  
  return (
    <li className={styles["card-container"]}  style={{borderColor:toggleFontColor() }}>
         <img className={styles["card__img"]} src={product.image} alt={product.title} />
         <h2  className={styles["card__title"]}  style={{color:toggleFontColor()}}>{product.title}</h2>
         <span className={styles["card__category"]}>{product.category}</span>        
         <p   className={styles["card__description"]} style={{color:toggleFontColor(),}}>{product.description}</p>
         <b   className={styles["card__price"]} style={{color:toggleFontColor()}}>{product.price} $</b> 
         <span className={styles["card__rating"]} style={{backgroundColor:toggleFontColor()}}>
          {product.rating.rate}/5
         </span>
         <button className={styles["card__favorite-button"]} >
             <Heart size={28} /> 
         </button>        
         <button type="button" 
         className={styles["card__add-button"]}
         onClick={addToCartHandleClick}>Add to cart</button>
    </li>
  )
}
