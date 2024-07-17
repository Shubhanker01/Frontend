import React from 'react'
import useDarkMode from '../Dark Mode/UseDarkMode'

export default function LightDarkMode() {
    // usedarkmode function
    useDarkMode()
    const [colorTheme, setTheme] = useDarkMode()

    return (
        <>
        {/* change color theme */}
            <div onClick={() => setTheme(colorTheme)} className='fixed top-[15px] right-[30px] bg-blue-800 rounded-full z-20 cursor-pointer'>
                {colorTheme === 'dark' ?
                    <img src="https://img.icons8.com/external-bearicons-flat-bearicons/32/000000/external-moon-halloween-bearicons-flat-bearicons.png" className='p-2' alt=''/>
                    :
                    <img src="https://img.icons8.com/external-flaticons-flat-flat-icons/32/000000/external-sun-100-most-used-icons-flaticons-flat-flat-icons-2.png" className='p-2' alt=''/>
                }
            </div>
        </>
    )
}
