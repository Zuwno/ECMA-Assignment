

const MainNavAdmin = () => {
  return `
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Giao diện</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#/Admin">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#/Admin/Projects">Projects</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#/Admin/Skills">Skill</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#/Admin/AboutMe">About Me</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#/Admin/Testmonial">Testmonial</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#/Admin/Contacts">Contact</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>`
};
export default MainNavAdmin;