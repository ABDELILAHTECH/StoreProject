import { Heart, Moon, ShoppingCart, Store, Sun } from 'lucide-react'
import { Link } from "react-router-dom"
import styles from './Styles/NavBar.module.css'
import { useContext } from 'react'
import { ThemeContext } from '../ThemeContext'


export default function NavBar() {
  const {theme,toggleMode} = useContext(ThemeContext);

  const toggleIconsColor = () => theme==="light"? "black":"white"


  return (
    <nav style={{backgroundColor:theme==="light"? "white":"black"}}>
        <Link to="/" className={styles["nav__logo"]}>
            <Store size={35} color={toggleIconsColor()} />
        </Link>
        <div >
            
        </div>
        <div className={styles["icons"]} >
            <ul className={styles["pages__links"]} >
                <li>
                    <Link to="/favorites" >
                       <Heart className={styles["favorites-icon"]} size={30} color={toggleIconsColor()} />
                    </Link>         
                </li>
                <li>
                  <Link to="/cart" >
                     <ShoppingCart className={styles["cart-icon"]} size={30} color={toggleIconsColor()} />
                  </Link>
                </li>
            </ul>
            <div className={styles["toogle-theme"]} onClick={toggleMode} >
                {
                  theme === "light" ? <Sun size={30}/> : <Moon fill='white' size={30} /> 
                }
            </div>
        </div>
    </nav>
  )
}
