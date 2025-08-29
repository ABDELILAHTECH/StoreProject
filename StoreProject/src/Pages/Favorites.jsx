import { useContext } from "react"
import { ThemeContext } from "../ThemeContext"
import Cards from "../Components/Cards"
import { FavoritesContext } from "../FavoritesContext"

export default function Favorites() {
  const {theme} = useContext(ThemeContext)
  const {favorites} = useContext(FavoritesContext)
  return (
    <main  style={{backgroundColor:theme==="light"? "white":"black"}}>
       <Cards products={favorites} />
    </main>
  )
}
