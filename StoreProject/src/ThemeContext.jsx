import { createContext, useEffect , useState } from "react";


export const ThemeContext = createContext()

export function ThemeProvider({children}){
    let [theme,setTheme] = useState(localStorage.getItem("theme") || "light")
    
    const toggleMode = () => {
     setTheme( prev => prev === "light" ? "dark" : "light" );
    }
     useEffect(()=>{
    localStorage.setItem("theme",theme)
  },[theme])   

    return (
        <ThemeContext.Provider value={{theme,setTheme,toggleMode}}>
          {children}
        </ThemeContext.Provider>
      );
}