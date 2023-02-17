import { useEffect, useState } from "@/lib";
const About = () => {

    
    const [aboutMe, setaboutMe] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/aboutme")
            .then((response) => response.json())
            .then(( data ) => setaboutMe(data));
  },[]);
    return `
    <!-- about section -->
    <section class="section pt-0" id="about">
        <!-- container -->
        <div class="container text-center">
            <!-- about wrapper -->

            ${aboutMe.map((aboutme) => 
                {
                    return `
                    <div class="about">
                <div class="about-img-holder">
                    <img src="assets/imgs/avatar.png" class="about-img" alt="Avatar">
                </div>
                <div class="about-caption">
                    <h2 class="section-title mb-3">About Me</h2>
                    <p class="section-text" >${aboutme.subtitle}</p>
                    <button class="btn-rounded btn btn-outline-primary mt-4">Download CV</button>
                </div>              
            </div><!-- end of about wrapper -->`
                }).join("")}
            


        </div><!-- end of container -->
    </section> <!-- end of about section -->
    `
};
export default About;