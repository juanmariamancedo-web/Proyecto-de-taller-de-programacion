import { useEffect, useState } from "react"
import DarkMode from "../icons/DarkMode"
import LightMode from "../icons/LightMode"

type Theme = "light" | "dark"

function getCookie(name: string): string | null {
  const cookies = document.cookie.split("; ")

  for (const cookie of cookies) {
    const [key, value] = cookie.split("=")
    if (key === name) return decodeURIComponent(value)
  }

  return null
}

function setCookie(name: string, value: string) {
  document.cookie = `${name}=${encodeURIComponent(value)}; path=/; max-age=31536000; SameSite=Lax`
}

function applyTheme(theme: Theme) {
  if (theme === "dark") {
    document.documentElement.classList.add("dark")
  } else {
    document.documentElement.classList.remove("dark")
  }
}

export default function ButtonOfDarkMode() {

  const [theme, setTheme] = useState<Theme>(() => {

    if (typeof document === "undefined") return "light"

    const cookieTheme = getCookie("theme")

    if (cookieTheme === "dark" || cookieTheme === "light") {
      return cookieTheme
    }

    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark"
    }

    return "light"
  })

  useEffect(() => {
    applyTheme(theme)
  }, [theme])

  function changeThemeMode() {

    const newTheme: Theme = theme === "dark" ? "light" : "dark"

    setTheme(newTheme)
    applyTheme(newTheme)
    setCookie("theme", newTheme)

  }

  return (
    <span
      onClick={changeThemeMode}
      className="flex justify-center items-center cursor-pointer"
    >
      {theme === "dark"
        ? <LightMode className="dark:text-white" />
        : <DarkMode className="dark:text-white" />
      }
    </span>
  )
}