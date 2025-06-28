import { createContext, useContext, useState } from 'react'

const DarkContainer = createContext();

export const useDarkMode = () => {return useContext(DarkContainer);}

export  function DarkModeContextProvider({children}) {

    const [darkMode, setDarkMode] = useState(false);

    function toggleDarkMode() {
        setDarkMode(prev => !prev);
    }

  return (
    <DarkContainer.Provider value={{darkMode, toggleDarkMode}}>
      {children}
    </DarkContainer.Provider>
  )
}
