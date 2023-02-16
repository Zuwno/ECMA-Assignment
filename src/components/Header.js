import MainNav from "./Nav";

const Header = () => {
    return `
    ${MainNav()}
    <header id="home" class="header">
        <div class="overlay"></div>
        <div class="header-content container">
            <h1 class="header-title">
                <span class="up">HI!</span>
                <span class="down">I am Phong</span>
            </h1>
            <p class="header-subtitle">FRONTEND WEB DESIGNER</p>            

            <button class="btn btn-primary">Visit My Works</button>
        </div>              
    </header>
    `
};
export default Header;