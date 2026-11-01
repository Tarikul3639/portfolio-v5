import { getRequestConfig } from "next-intl/server"
import { hasLocale } from "next-intl"
import { routing } from "./routing"

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale
  const locale = hasLocale(routing.locales, requested) ? requested : "en"

  const [common, home, about, projects, services, contact] = await Promise.all([
    import(`../messages/${locale}/common.json`),
    import(`../messages/${locale}/home.json`),
    import(`../messages/${locale}/about.json`),
    import(`../messages/${locale}/projects.json`),
    import(`../messages/${locale}/services.json`),
    import(`../messages/${locale}/contact.json`),
  ])

  return {
    locale,
    messages: {
      ...common.default,
      ...home.default,
      home: {
        ...home.default.home,
        navigation: common.default.common.navigation,
        footer: common.default.common.footer,
      },
      ...about.default,
      ...projects.default,
      ...services.default,
      ...contact.default,
    },
  }
})
