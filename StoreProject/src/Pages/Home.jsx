import { useContext } from "react"
import { ProductContext } from "../ProductContext"
import Cards from "../Components/Cards";

export default function Home() {
  let products = useContext(ProductContext);

  return (
    <div>
      <Cards products={products} />
    </div>
  )
}
