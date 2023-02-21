import { useEffect, useState } from "@/lib";
const Skill = () => {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/skills")
                .then((response) => response.json())
                .then(( data ) => setSkills(data));
      },[]);

    return `
    <section class="section" id="skill">
        <div class="container text-center">
            <h6 class="section-title mb-6">Skill</h6>
            <!-- row -->
            <div class="row">
                
            ${skills.map((skill) => 
                {
                    return `
                    <div style ="margin-bottom:40px;" class="col-md-6 col-lg-3">
                    <div class="service-card">
                        <div class="body">
                            <img src="${skill.src}" alt="" class="icon">
                            <h6 class="title">${skill.name}</h6>
                            <p class="subtitle">${skill.subtitle}</p>
                        </div>
                    </div>
                </div>
                    `
                }).join("")}
               
    

            </div><!-- end of row -->
        </div>
    </section><!-- end of skill section -->
    `
};
export default Skill;