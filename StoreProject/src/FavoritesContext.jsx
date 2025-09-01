import { createContext,useEffect, useState } from "react";

export const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || [] );

  useEffect(()=>{
     localStorage.setItem("favorites",JSON.stringify(favorites))
  },[favorites])  

  const addToFavorites = (item) => {
     
    setFavorites((prev) => {
      if (prev.some((p)=>p.id === item.id)) {
          return prev;
      }else{
           return [...prev, item];
      }
    });
  };

  const removeFromFavorites = (item) => {
    setFavorites((prev) => prev.filter((f) => f.title !== item.title));
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addToFavorites,
               removeFromFavorites 
          }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}
