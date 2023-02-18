

const MainNav = () => {
  return `
  <nav id="show" class="custom-navbar show-cus " data-spy="affix" data-offset-top="20">
  <div class="container">
      <a class="logo" href="#">Zuwno</a>         
      <ul class="nav show ">
          <li class="item">
              <a class="link" href="#">Home</a>
          </li>
          <li class="item">
              <a class="link" href="#about">About</a>
          </li>
          <li class="item">
              <a class="link" href="#project">Project</a>
          </li>
          <li class="item">
              <a class="link" href="#feedback">Feedback</a>
          </li>
          <!-- <li class="item">
              <a class="link" href="#blog">Blog</a>
          </li> -->
          <li class="item">
              <a class="link" class="btn btn-primary" href="#blog">Blog</a>
          </li>
          <li class="item">
              <a class="link" class="btn btn-primary" href="#contact">Contact</a>
          </li>
          
      </ul>
      <button id="nav-toggle" class=" nav-button  hamburger hamburger--elastic">
          <div class="hamburger-box">
            <div class="hamburger-inner"></div>
          </div>
      </button>
  </div>          
</nav>`
};
export default MainNav;