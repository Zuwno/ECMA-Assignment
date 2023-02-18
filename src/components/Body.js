import About from "./About"
import Contact from "./Contact"
import Project from "./Project"
import Skill from "./Skill"
import Testimonial from "./Testimonial"
import Blog from "./Blog"


const Body = () => {
  return `
  ${About()};
  ${Skill()};
  ${Project()};
  ${Testimonial()};
  ${Blog()};
  ${Contact()};
  
  `
}

export default Body