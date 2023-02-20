import { useEffect } from "@/lib";

const Contact = () => {
  useEffect(() => {
    const form = document.querySelector("#form-add");
    const contactName = document.querySelector("#contact-name");
    const contactEmail = document.querySelector("#contact-email");
    const contactContent = document.querySelector("#comment");

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      

      const formData = {
        name: contactName.value,
        email: contactEmail.value,
        content: contactContent.value,
      };

      fetch("http://localhost:3000/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }).then(() => alert('Cảm ơn bạn đã liên hệ, chúng tôi sẽ trả lời trong thời gian sớm nhất 😘'));
    });
  });

  return `
    <!-- contact section -->
    <section class="section" id="contact">
        <div class="container text-center">
            <p class="section-subtitle">How can you communicate?</p>
            <h6 class="section-title mb-5">Contact Me</h6>
            <!-- contact form -->
            <form action="" class="contact-form col-md-10 col-lg-8 m-auto" id="form-add">
                <div class="form-row">
                    <div class="form-group col-sm-6">
                        <input type="text" size="50" id="contact-name" class="form-control" placeholder="Your Name" required>                 
                    </div>
                    <div class="form-group col-sm-6">
                        <input type="email" class="form-control" id="contact-email" placeholder="Enter Email" required>                 
                    </div>
                    <div class="form-group col-sm-12">
                        <textarea name="comment" id="comment" rows="6" class="form-control" placeholder="Write Something"></textarea>
                    </div>
                    <div class="form-group col-sm-12 mt-3">              
                        <button value="Send Message" class="btn btn-outline-primary rounded"> Send mess </button>
                    </div>
                </div>  
            </form><!-- end of contact form -->
        </div><!-- end of container -->
    </section><!-- end of contact section -->
    `;
};

export default Contact;
