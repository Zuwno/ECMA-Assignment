import About from "./About"
import Contact from "./Contact"
import Project from "./Project"
import Skill from "./Skill"
import Testimonial from "./Testimonial"


const Body = () => {
  return `
  ${About()};
  ${Skill()};
  ${Project()};
  ${Testimonial()};
  ${Contact()};
  
  `
}

export default Body