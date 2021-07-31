import React, { Dispatch, SetStateAction } from "react";

interface ThemeProviderProps {
  children: JSX.Element[] | JSX.Element;
}

interface ThemeContextProps {
  theme: string | null;
  setTheme: Dispatch<SetStateAction<string | null>>
}

const ThemeContext = React.createContext<ThemeContextProps | null>(null);

export function ThemeProvider({children, ...pros}:ThemeProviderProps) {
  const storageThemeValue = localStorage.getItem('theme');
    const [theme, setTheme] = React.useState<string | null>(() =>{
      if(storageThemeValue) {
        return storageThemeValue;
      } else {
        return 'dark';
      }
    });

    return(
      <ThemeContext.Provider value={{theme, setTheme}}>
        {children}
      </ThemeContext.Provider>
    )
}

export function useThemeContext(): ThemeContextProps {
  const context = React.useContext(ThemeContext);

  if (!context) {
    throw new Error(
      'useThemeContext must be used after an ThemeContext.Provider'
    );
  }

  return context;
}