import { useEffect, useState } from "react";


export default function UseDarkMode() {
    const [theme, setTheme] = useState(localStorage.theme)
    const colorTheme = theme === 'light' ? 'dark' : 'light'
    useEffect(() => {
        const root = window.document.documentElement
        root.classList.remove(colorTheme)
        root.classList.add(theme)
        localStorage.setItem('theme', theme)
        const body = document.getElementById('root')
        if(localStorage.getItem('theme')==='light'){
           body.style.backgroundColor = 'rgb(224 242 254)'
        }
        else{
           body.style.backgroundColor = 'rgb(31 41 55)'
        }
    }, [theme, colorTheme])

    return [colorTheme, setTheme]
}
