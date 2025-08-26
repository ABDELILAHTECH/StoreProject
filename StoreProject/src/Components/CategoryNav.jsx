import { useContext, useState } from "react"
import styles from "./Styles/CategoryNav.module.css"
import { ThemeContext } from '../ThemeContext'
import { ProductContext } from "../ProductContext"


export default function CategoryNav() {
  const {theme} = useContext(ThemeContext)
  const {categories,filterByCategory} = useContext(ProductContext)
  
  const [active,setActive] = useState("All")

  const categoryClickHandle = (category) => {
        setActive(category)
        filterByCategory(category) 
           
  }
  const activeCategoryStyle = (category) => {
       if (active === category) {
          return theme === "light" ? "light__active"
                                   : "dark__active"
       }else {
        return theme === "light" ? "light__default"
                                   : "dark__default"
       }
  }
  
  return (
    <nav>
       <ul className={styles["category-list"]} >
         { 
          categories.map((category,index)=>{
             return(
             <li key={index}>
             <input onClick={()=>categoryClickHandle(category)}
                    type="button" name={category}
                    value={category} 
                    className={styles[activeCategoryStyle(category)]} />
             </li>
             )
          })
         }
          
          
       </ul>  
    </nav>
  )
}
