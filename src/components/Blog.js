import { useEffect, useState } from "@/lib";

const Blog = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
      fetch("http://localhost:3000/blogs")
              .then((response) => response.json())
              .then(( data ) => setBlogs(data));
    },[]);
  return `
  <!-- blog section -->
    <section class="section" id="blog">
        <!-- container -->
        <div class="container text-center">
            <p class="section-subtitle">Recent Posts?</p>
            <h6 class="section-title mb-6">Blog</h6>

            ${blogs.map((blog) => 
                {
                    return `
                    <!-- blog-wrapper -->
            <div class="blog-card">
                <div class="blog-card-header">
                    <img src="assets/imgs/img-1.jpg" class="blog-card-img" alt="">
                </div>
                <div class="blog-card-body">
                    <h5 class="blog-card-title">${blog.title}</h6>

                    <p class="blog-card-caption">
                        <a href="#">By: Admin</a>
                        <a href="#"><i class="ti-heart text-danger"></i> 234</a>
                        <a href="#"><i class="ti-comment"></i> 123</a>
                    </p>
                    <p>${blog.content}</p>


                    <a href="#/Blog/${blog.id}" class="blog-card-link">Read more <i class="ti-angle-double-right"></i></a>
                </div>
            </div><!-- end of blog wrapper -->
                    `
                }).join("")};
            

            

        </div><!-- end of container -->
    </section><!-- end of blog section -->`
};
export default Blog;