import { Search } from 'lucide-react'
import styles from "./Styles/SearchBar.module.css" 
import { useContext , useRef } from "react"; 
import { ProductContext } from '../ProductContext'

export default function SearchBar() {
  const {filterBySearchName} = useContext(ProductContext);
  const productName = useRef("")

  const searchHandleClick = (e) => {

       const productNameValue = productName.current.value;
       e.preventDefault();
       filterBySearchName(productNameValue.toLowerCase())
  }

  return (
     <form className={styles["search-form"]}>
          <input ref={productName} type="text" placeholder='Product Name'/>
          <button onClick={searchHandleClick} className={styles['search__button']}>
             <Search size={25}/>
          </button>
         
     </form>
  )
}
