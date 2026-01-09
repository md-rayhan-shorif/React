
import { useEffect, useState } from 'react';
import { ThemeProvider } from '../Components/Theme';
import ThemeBtn from '../Components/ThemeBtn';
import Cards from '../Components/Card';

const ThemeProject = () => {
  const [ themeMode, setThemeMode] = useState("light");
  
    const lightTheme = () => {
      setThemeMode("light")
    }
    const darkTheme = () => {
      setThemeMode("dark")
    }
  
    useEffect(() => {
     const theme = document.querySelector('html')
     theme.classList.remove("light", "dark");
     theme.classList.add(themeMode)
    }, [themeMode])
    
  
  
    return (
      <>
      <ThemeProvider value={{themeMode, lightTheme, darkTheme}} >
  
     
        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                 <ThemeBtn/>
              </div>
  
              <div className="w-full max-w-sm mx-auto">
                 <Cards/>
              </div>
          </div>
      </div>
  
      
       </ThemeProvider>
      
      </>
      
      
    );
  };
  
  export default ThemeProject;