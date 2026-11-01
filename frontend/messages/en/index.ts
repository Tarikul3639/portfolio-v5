import common from "./common.json"
import home from "./home.json"
import about from "./about.json"
import projects from "./projects.json"
import services from "./services.json"
import contact from "./contact.json"
import businessCard from "./business-card.json"

const messages = {
  ...common,
  ...home,
  home: {
    ...home.home,
    navigation: common.common.navigation,
    footer: common.common.footer,
  },
  ...about,
  ...projects,
  ...services,
  ...contact,
  ...businessCard,
}

export default messages
