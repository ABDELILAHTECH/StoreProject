import { createContext , useState } from "react"



export const CartContext = createContext();

export function CartProvider({ children }){
     const [cart,setCart] = useState([]);
     const totalPrice = cart.reduce((sum,item) => sum + item.price * item.quantity,0)

     const addToCart = (item) => {
        let isExisting = cart.some(p => p.id === item.id)
        console.log(isExisting);

        if (isExisting) {
           setCart(prev => prev.map(p=>
             p.id === item.id ? {...p,quantity:p.quantity + 1} : p
           )) 
        }else{
            setCart(prev=>[...prev,{...item,quantity:1}])
        }

   
     }
     const removeFromCart = (item) => {
        if (item.quantity === 1) {
           setCart((prev)=> prev.filter((p)=>p.id !== item.id))
        }else{
            setCart(prev => prev.map(p=>
             p.id === item.id ? {...p,quantity:p.quantity - 1} : p
           )) 
        }
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