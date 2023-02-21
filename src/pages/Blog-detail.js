import Footer from "@/components/Footer";
import MainNav from "@/components/Nav";
import { useEffect, useState } from "@/lib";

const BlogDetailPage = ({ id }) => {

    const [blog, setBlog] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/blogs/${id}`)
                .then((response) => response.json())
                .then(( data ) => setBlog(data));
      },[]);

  return `
  ${MainNav()}
  <!-- page header -->
  <header id="home" class="header">
    <div class="overlay"></div>
    <div class="header-content container">
      <h1 class="header-title">
        <span class="down">${blog.title}</span>
      </h1>
      <button class="btn btn-primary rounded"><ion-icon name="pricetag-outline"></ion-icon> ${blog.category}   </button>
      <br>
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
                    <img src="${blog.img}" class="about-img" alt="">
                </div>
                <div class="about-caption">
                    <h2 class="section-title mb-3">About this Project
                    </h2>
                    <p>
                    ${blog.content}      
                    </p>
                    
                </div>              
            </div><!-- end of about wrapper -->
        </div><!-- end of container -->
    </section> <!-- end of about section -->
           
        ${Footer()}
        `
}
export default BlogDetailPage;
