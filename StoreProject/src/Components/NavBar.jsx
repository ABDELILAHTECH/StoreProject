import { Heart, Moon, ShoppingCart, Store, Sun } from 'lucide-react'
import styles from './Styles/NavBar.module.css'
import { useContext } from 'react'
import { ThemeContext } from '../ThemeContext'


export default function NavBar() {
  const {theme,toggleMode} = useContext(ThemeContext);

  const toggleIconsColor = () => theme==="light"? "black":"white"


  return (
    <nav style={{backgroundColor:theme==="light"? "white":"black"}}>
        <div className={styles["nav__logo"]}>
            <Store size={35} color={toggleIconsColor()} />
        </div>
        <div className={styles["icons"]} >
            <ul className={styles["pages__links"]} >
                <li>
                    <Heart size={30} color={toggleIconsColor()} />
                </li>
                <li>
                  <ShoppingCart size={30} color={toggleIconsColor()} />
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
