import { useContext } from "react"
import { ProductContext } from "../ProductContext"
import { ThemeContext } from '../ThemeContext'
import Cards from "../Components/Cards";
import Card from "../Components/Card";
import NavBar from "../Components/NavBar";

export default function Home() {
  let products = useContext(ProductContext);
  const {theme} = useContext(ThemeContext);
  

  return (
    <div>
      <header>
           <NavBar />
        </header>
        <main  style={{backgroundColor:theme==="light"? "white":"black"}}>
          <Cards products={products}  >
             <Card />
          </Cards>
        </main>
     
    </div>
  )
}
