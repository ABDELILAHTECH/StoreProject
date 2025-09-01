import { createContext , useState } from "react"



export const CartContext = createContext();

export function CartProvider({ children }){
     const [cart,setCart] = useState([]);
     const [totalPrice,setTotalPrice] = useState(0)

     const addToCart = (item) => {
        
    setCart((prev) => {
       if (cart.some(p=>p.id === item.id)) {
           return prev;
        }else{
            setTotalPrice(totalPrice + item.price)
            return [...prev,item];
        }
    })
     }
     const removeFromCart = (item) => {
        setCart((prev)=> prev.filter((p)=>p.id !== item.id))
     }
    return(
        <CartContext.Provider 
         value={{cart,addToCart,
                 totalPrice,removeFromCart}}
        >
            {children}
        </CartContext.Provider>
    )
}