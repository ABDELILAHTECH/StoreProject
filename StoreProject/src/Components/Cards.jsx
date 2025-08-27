import Card from "./Card"
import styles from "./Styles/Cards.module.css" 


export default function Cards({ products }) {

  if (products.length === 0) {
    return <p style={{textAlign:"center"}}>Aucun produit disponible.</p>;
  }
  if (products) {
    return (
    <div className={styles["cards-container"]} >
      <ul className={styles["cards-list"]} >
        {products.map(product => (
          <Card key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
  }
  if (!products) {
    return <p>loading...</p>
  }

 

  
}
