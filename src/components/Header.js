import MainNav from "./Nav";
import { useEffect, useState } from "@/lib";
const Header = () => {

    const [aboutMe, setaboutMe] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/aboutme")
            .then((response) => response.json())
            .then(( data ) => setaboutMe(data));
  },[]);
    return `
    ${MainNav()}
    <header id="home" class="header">
        <div class="overlay"></div>
        <div class="header-content container">
            <h1 class="header-title">
                <span class="up">HI!</span>
                ${aboutMe.map((aboutme) => 
                    {
                        return `
                        <span class="down">I am ${aboutme.name}</span>
                        `
                    }).join("")}
                
            </h1>
            <p class="header-subtitle">FRONTEND WEB DESIGNER</p>            

            <button class="btn btn-primary">Visit My Works</button>
        </div>              
    </header>
    `
};
export default Header;