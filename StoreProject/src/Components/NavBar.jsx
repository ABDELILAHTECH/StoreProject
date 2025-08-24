import { Heart, Moon, ShoppingCart, Store, Sun } from 'lucide-react'
import styles from './Styles/NavBar.module.css'
import { useContext } from 'react'
import { ThemeContext } from '../ThemeContext'


export default function NavBar() {
  const {theme,toggleMode} = useContext(ThemeContext);

  return (
    <nav>
        <div className={styles["nav__logo"]}>
            <Store size={35}  />
        </div>
        <div className={styles["icons"]} >
            <ul className={styles["pages__links"]} >
                <li>
                    <Heart size={30} />
                </li>
                <li>
                  <ShoppingCart size={30} />
                </li>
            </ul>
            <div className={styles["toogle-theme"]} onClick={toggleMode} >
                {
                  theme === "light" ? <Sun size={30}/> : <Moon fill='black' size={30} /> 
                }
            </div>
        </div>
    </nav>
  )
}
