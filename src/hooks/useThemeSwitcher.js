import React, { useEffect, useState } from 'react'

const useThemeSwitcher = () => {


    const preferDarkQuery = "(prefers-color-scheme: dark)";
    const [mode, setMode] = useState('')

    // For User System Mode
    useEffect(() => {
        const mediaQuery = window.matchMedia(preferDarkQuery);
        const userPref = window.localStorage.getItem("theme");

        const handleChange = () => {
            if(userPref) {
                let check = userPref === 'dark' ? 'dark' : 'light';
                setMode(check);
                if(check) {
                    document.documentElement.classList.add('dark')
                } else {
                    document.documentElement.classList.remove('dark')
                }
            } else {
                let check = mediaQuery.matches ? 'dark' : 'light';
                setMode(check)
                if(check) {
                    document.documentElement.classList.add('dark')
                } else {
                    document.documentElement.classList.remove('dark')
                }
            }
        }

        // To Check Mode When first time render
        handleChange();

        mediaQuery.addEventListener('change', handleChange)

        return () => mediaQuery.removeEventListener("change", handleChange)

    }, [])

    // For User Switching Using Moon & Sun Icon
    useEffect(() => {
        if(mode === 'dark') {
            window.localStorage.setItem('theme', 'dark')
            document.documentElement.classList.add('dark')
        }


        if (mode === 'light') {
            document.documentElement.classList.remove('dark')
            window.localStorage.setItem('theme', 'light')
        }
    }, [mode])

  return [mode, setMode]
}

export default useThemeSwitcher