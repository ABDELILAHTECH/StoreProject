import styles from "./Styles/Card.module.css" 
import { Heart } from "lucide-react"

export default function Card( { product } ) {
  


  
  return (
    <li className={styles["card-container"]}>
         <img className={styles["card__img"]} src={product.image} alt={product.title} />
         <h2  className={styles["card__title"]} >{product.title}</h2>
         <span className={styles["card__category"]}>{product.category}</span>        
         <p   className={styles["card__description"]} >{product.description}</p>
         <b   className={styles["card__price"]}>{product.price} $</b> 
         <span className={styles["card__rating"]}>
          {product.rating.rate}/5
         </span>
         <button className={styles["card__favorite-button"]} >
             <Heart size={28} /> 
         </button>        
         <button type="button" className={styles["card__add-button"]}>Add to cart</button>
    </li>
  )
}
