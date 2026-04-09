import { createRoot } from "react-dom/client"
import type { ComponentType } from "react"

import { Header } from "./components/Header/Header"

const components: Record<string, ComponentType> = {
  Header,
}

document.querySelectorAll<HTMLElement>("[data-react]").forEach((el) => {
  const name = el.dataset.react

  if (!name) return

  const Component = components[name]

  if (Component) {
    createRoot(el).render(<Component />)
  }
})