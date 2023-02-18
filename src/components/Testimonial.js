import { useEffect, useState } from "@/lib";
const Testimonial = () => {
  const [testmonial, setTestmonial] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/testmonial")
      .then((response) => response.json())
      .then((data) => setTestmonial(data));
  }, []);

  return `
    <!-- testimonial section -->
    <section class="section" id="feedback">
        <div class="container text-center">
            <p class="section-subtitle">What Think Client About Me ?</p>
            <h6 class="section-title mb-6">Testmonial</h6>
            <div class="row">

    ${testmonial.map((testmonial ) => 
        {
            return ` <div class="col-md-6">
                    <div class="testimonial-card">
                        <div class="testimonial-card-img-holder">
                            <img src="assets/imgs/avatar.png" class="testimonial-card-img" alt="Avatar">                           
                        </div>
                        <div class="testimonial-card-body">
                            <p class="testimonial-card-subtitle">${testmonial.content}</p>
                            <h6 class="testimonial-card-title">${testmonial.name}</h6>
                        </div>
                    </div>
                </div>
                `
        }).join("")}
               
                
                

        </div>
        </div> <!-- end of container -->
    </section> <!-- end of testimonial section -->
    `;
};
export default Testimonial;
