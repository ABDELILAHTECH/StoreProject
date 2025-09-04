import { createContext, useState , useEffect} from "react"
import { jsxs } from "react/jsx-runtime";


export const ProductContext = createContext([])

export function ProductProvider({ children }){
    let [storeProducts,setStoreProducts] = useState([]);
    let [filtredProducts,setFiltredProducts] =useState(
      JSON.parse(localStorage.getItem("filtredProducts")) || []);
    const categories = ["All","Clothes","Electronics","Jewelery"];
    
    useEffect(()=>{
      localStorage.setItem("filtredProduct",JSON.stringify(filtredProducts))
    })
      useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())            
            .then(json=>{
                         setStoreProducts(json)
                         setFiltredProducts(json)
                    } 
        )     
        filtredProducts.map(p=>[{...p,quantity:0}])  
   },[])
 
    const filterByCategory = (category) => {
          let newList = [];
          if(category === "All"){
            setFiltredProducts(storeProducts)
            return
          }else if (category === "Clothes") {
              newList = storeProducts.filter((p) => p.category === "men's clothing" || p.category === "women's clothing")
          }else if (category === "Electronics" || category === "Jewelery") {
               newList = storeProducts.filter((p) => p.category === category.toLowerCase())   
          }    
              setFiltredProducts(newList)
     }

     const filterBySearchName = (productName) => {
           setFiltredProducts(filtredProducts.filter(p=>p.title.toLowerCase().includes(productName)))
     }
     return(
        <ProductContext.Provider value={{filtredProducts,categories,filterByCategory,filterBySearchName}}>
            {children}
        </ProductContext.Provider>
     )
     




    }