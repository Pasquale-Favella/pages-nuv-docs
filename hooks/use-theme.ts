import { themeChange } from 'theme-change'
import { useEffect , useState } from 'react'

export const useTheme = ()=>{
    const [theme , setTheme] = useState('dark');

    useEffect(() => {
        
        const currentTheme = localStorage.getItem('theme')

        if(!currentTheme){
            localStorage.setItem('theme',theme)
        }

        if(currentTheme === 'light') setTheme('light')


        themeChange(false);
      }, [])

      const toggleTheme = ()=> themeChange();

      return {
          theme , toggleTheme
      }
}