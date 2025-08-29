import { createContext,useEffect, useState } from "react";

export const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || [] );

  useEffect(()=>{
     localStorage.setItem("favorites",JSON.stringify(favorites))
  },[favorites])  
  
  //  const [favoris,setFavoris] = useState(JSON.parse(localStorage.getItem("favoris")) || false)
  // useEffect(()=>{
  //    localStorage.setItem("favoris",JSON.stringify(favoris))
  // },[favoris])

  const addToFavorites = (item) => {
    setFavorites((prev) => [...prev, item]);
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
