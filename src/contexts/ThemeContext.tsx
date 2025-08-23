import React, { useContext } from 'react';

interface ThemeContextProps {
  theme: string,
  toggleTheme: () => void
}

export const ThemeContext = React.createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider = ({ children }: React.PropsWithChildren) => {
  const themeSaved = window.sessionStorage.getItem('theme') || 'light';
  const [theme, setTheme] = React.useState(themeSaved);

  React.useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])


  function toggleTheme() {
    setTheme(prevState => {
      const newTheme =  prevState === 'light' ? 'dark' : 'light';
      window.sessionStorage.setItem('theme', newTheme);
      return newTheme
    })
  }

  console.log('theme: ', theme)

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context;
}