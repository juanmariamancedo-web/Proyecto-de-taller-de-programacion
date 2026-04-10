import { useEffect, useState } from "react"
import DarkMode from "../icons/DarkMode"
import LightMode from "../icons/LightMode"

export default function ButtonOfDarkMode() {

  const [theme, setTheme] = useState("light")

  useEffect(() => {

    const isDark =
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)

    if (isDark) {
      document.documentElement.classList.add("dark")
      setTheme("dark")
    } else {
      document.documentElement.classList.remove("dark")
      setTheme("light")
    }

  }, [])

  function changeThemeMode() {

    if (theme === "dark") {
      document.documentElement.classList.remove("dark")
      localStorage.theme = "light"
      setTheme("light")
    } else {
      document.documentElement.classList.add("dark")
      localStorage.theme = "dark"
      setTheme("dark")
    }

  }

  return (
    <span onClick={changeThemeMode} className="flex justify-center items-center">
      {theme === "dark"
        ? <LightMode className="dark:text-white" />
        : <DarkMode className="dark:text-white" />
      }
    </span>
  )
}