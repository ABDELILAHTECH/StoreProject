import { useContext, useState } from "react"
import styles from "./Styles/Card.module.css" 
import { Heart } from "lucide-react"
import { ThemeContext } from "../ThemeContext"
import { CartContext } from "../CartContext"
import { FavoritesContext } from "../FavoritesContext"

export default function Card( { product } ) {
 

  const {theme} = useContext(ThemeContext);
  const {cart , addToCart , removeFromCart } = useContext(CartContext);
  const { favorites , addToFavorites , removeFromFavorites } = useContext(FavoritesContext);
  const isFavorite = favorites.some( f => f.id === product.id)
  const isCart = cart.some(p => p.id === product.id)
  
  const addToCartHandleClick = () => {
        addToCart(product)
  }
  const removeFromCartHandleClick = () => {
        removeFromCart(product)
  }
  const addToFavoritesHandleClick = () => {
        isFavorite ? removeFromFavorites(product) : addToFavorites(product)        
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
         <button className={styles["card__favorite-button"]}
          onClick={addToFavoritesHandleClick} >
             {<Heart  fill={isFavorite ? "black" : "white"}  size={28} />}
         </button>   
             
         {isCart? 
          <>
            <div>
              <button style={{backgroundColor:"white",fontSize:"25px",fontWeight:"bold" ,padding:"0 7px",borderRadius:"50%"}}
                       onClick={removeFromCartHandleClick}>-</button>
              <span>{product.quantity}</span>
              <button style={{backgroundColor:"white",fontSize:"25px",fontWeight:"bold" ,padding:"0 7px",borderRadius:"50%"}}
                      onClick={addToCartHandleClick}>
                        +
              </button>
            </div>
            <button type="button" 
            className={styles["card__add-button"]}
            onClick={removeFromCartHandleClick}>Remove from cart</button>
          </> 
         :<button type="button" 
         className={styles["card__add-button"]}
         onClick={addToCartHandleClick}>Add to cart</button>
         
         }  
         
    </li>
  )
  
}
