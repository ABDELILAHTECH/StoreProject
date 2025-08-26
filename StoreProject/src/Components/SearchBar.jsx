import { Search } from 'lucide-react'
import styles from "./Styles/SearchBar.module.css"  

export default function SearchBar() {
  return (
     <form className={styles["search-form"]}>
          <input type="text" placeholder='Product Name'/>
          <Search size={25}/>
     </form>
  )
}
