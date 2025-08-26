import { useContext } from "react"
import { ProductContext } from "../ProductContext"
import { ThemeContext } from '../ThemeContext'
import Cards from "../Components/Cards";
import Card from "../Components/Card";
import NavBar from "../Components/NavBar";
import SearchBar from "../Components/SearchBar";
import CategoryNav from "../Components/CategoryNav";
import styles from "./Home.module.css"

export default function Home() {
  let {filtredProducts} = useContext(ProductContext);
  const {theme} = useContext(ThemeContext);
  


  return (
    <div>
      <header>
           <NavBar />
        </header>
        <main  style={{backgroundColor:theme==="light"? "white":"black"}}>
          <div className={styles["after-header"]}>
            <SearchBar />
            <CategoryNav />
          </div>
          <Cards products={filtredProducts}  >
             <Card />
          </Cards>
        </main>
     
    </div>
  )
}
