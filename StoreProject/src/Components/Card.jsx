import styles from "./Styles/Card.module.css" 

export default function Card( { product } ) {
  


  
  return (
    <li className={styles["card-container"]}>
         <img src={product.image} width={150} height={150} alt="" />
         <h2>{product.title}</h2>
         <p>{product.description}</p>
         <span>{product.categoty}</span>
         <b>{product.price}</b>         
         <div>
          {product.rating.rate}/5
         </div>
    </li>
  )
}
