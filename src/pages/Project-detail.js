import Footer from "@/components/Footer";
import MainNav from "@/components/Nav";
import { useEffect, useState } from "@/lib";

const ProjectDetailPage = ({ id }) => {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/projects/${id}`)
                .then((response) => response.json())
                .then(( data ) => setProjects(data));
      },[]);

  return `
  ${MainNav()}
  <!-- page header -->
  <header id="home" class="header">
    <div class="overlay"></div>
    <div class="header-content container">
      <h1 class="header-title">
        <span class="up">Project</span>
        <span class="down">${projects.name}</span>
      </h1>
     
      <a href="${projects.github}"> <button class="btn btn-primary rounded"><ion-icon name="logo-github"></ion-icon> Github </button></a>
      <a href="${projects.preview}"><button class="btn btn-primary rounded"><ion-icon name="pulse-outline"></ion-icon> Preview </button></a>
      <button class="btn btn-primary rounded"><ion-icon name="pricetag-outline"></ion-icon> ${projects.category}   </button>
      <br>
      <button class="btn btn-primary rounded">Start time  ${projects.starttime}  </button>
      <button class="btn btn-primary rounded">End time  ${projects.endtime}  </button>
      </div>
  </header>
  <!-- end of page header -->
  <!-- about section -->
    <section class="section pt-0" id="about">
        <!-- container -->
        <div class="container text-center">
            <!-- about wrapper -->
            <div class="about">
                <div class="about-img-holder">
                    <img src="assets/imgs/avatar.png" class="about-img" alt="">
                </div>
                <div class="about-caption">
                    <h2 class="section-title mb-3">About this Project
                    </h2>
                    <p>
                    ${projects.describe}      
                    </p>
                    
                </div>              
            </div><!-- end of about wrapper -->
        </div><!-- end of container -->
    </section> <!-- end of about section -->
           
        ${Footer()}
        `
}
export default ProjectDetailPage;
