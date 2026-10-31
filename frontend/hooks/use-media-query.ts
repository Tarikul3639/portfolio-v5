"use client"

import { useEffect, useState } from "react"

export function useResponsive() {
  const [isPhone, setIsPhone] = useState(false)
  const [isTablet, setIsTablet] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const phoneQuery = window.matchMedia("(max-width: 639px)")
    const tabletQuery = window.matchMedia(
      "(min-width: 640px) and (max-width: 1023px)"
    )
    const desktopQuery = window.matchMedia("(min-width: 1024px)")

    const update = () => {
      setIsPhone(phoneQuery.matches)
      setIsTablet(tabletQuery.matches)
      setIsDesktop(desktopQuery.matches)
    }

    update()

    phoneQuery.addEventListener("change", update)
    tabletQuery.addEventListener("change", update)
    desktopQuery.addEventListener("change", update)

    return () => {
      phoneQuery.removeEventListener("change", update)
      tabletQuery.removeEventListener("change", update)
      desktopQuery.removeEventListener("change", update)
    }
  }, [])

  return { isPhone, isTablet, isDesktop }
}
