import { createContext, useState , useEffect} from "react"


export const ProductContext = createContext([])

export function ProductProvider({ children }){
    let [storeProducts,setStoreProducts] = useState([]);
    let [filtredProducts,setFiltredProducts] =useState([]);
    const categories = ["All","Clothes","Electronics","Jewelery"];
    
      useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())            
            .then(json=>{
                         setStoreProducts(json)
                         setFiltredProducts(json)
                    } 
        )       
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