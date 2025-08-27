import { useContext } from "react"
import { ThemeContext } from "../ThemeContext"

export default function Favorites() {
  const {theme} = useContext(ThemeContext)
  return (
    <main  style={{backgroundColor:theme==="light"? "white":"black"}}>

    </main>
  )
}
