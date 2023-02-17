import { useEffect, useState } from "@/lib";
const Project = () => {

    const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/projects")
            .then((response) => response.json())
            .then(( data ) => setProjects(data));
  },[]);


    return `
    <!-- project section -->
    <section class="section" id="project">
        <div class="container text-center">
            <p class="section-subtitle">What I Did ?</p>
            <h6 class="section-title mb-6">Project</h6>
            <!-- row -->
            <div class="row">
            ${projects.map((project) => 
                {
                    return `
                    <div class="col-md-4">
                    <a href="#" class="portfolio-card">
                        <img src="assets/imgs/folio-1.jpg" class="portfolio-card-img" alt="Project">    
                        <span class="portfolio-card-overlay">
                            <span class="portfolio-card-caption">
                                <h4>${project.name}</h5>
                                <p class="font-weight-normal">Category: ${project.category}</p>
                            </span>                         
                        </span>                     
                    </a>
                </div>`
                }).join("")}
                
                
            </div><!-- end of row -->
        </div><!-- end of container -->
    </section> <!-- end of project section -->
    <section class="section-sm bg-primary">
        <!-- container -->
        <div class="container text-center text-sm-left">
            <!-- row -->
            <div class="row align-items-center">
                <div class="col-sm offset-md-1 mb-4 mb-md-0">
                    <h6 class="title text-light">Want to work with me?</h6>
                    <p class="m-0 text-light">Always feel Free to Contact & Hire me</p>
                </div>
                <div class="col-sm offset-sm-2 offset-md-3">
                    <button class="btn btn-lg my-font btn-light rounded"><a style="text-decoration: none;"   href="https://www.facebook.com/Zuwno/">Hire Me</a></button>
                </div>
            </div> <!-- end of row -->
        </div> <!-- end of container -->
    </section> <!-- end of section -->
    `
};
export default Project;