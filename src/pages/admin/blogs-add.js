import MainNavAdmin from "@/components/NavAdmin";
import { router, useEffect } from "@/lib";



const AdminBlogsAddPage = () => 
{

     useEffect(() => {
          const form = document.querySelector("#form-add");
          const blogTitle = document.querySelector("#blog-title");
          const blogContent = document.querySelector("#blog-content");
          const blogImg = document.querySelector("#blog-img");
          const blogCategory = document.querySelector("#blog-category");
  
          form.addEventListener("submit", function (e) {
              e.preventDefault();
              
              const formData = {
                
                  title: blogTitle.value,
                  content: blogContent.value,
                  img: blogImg.value,
                  category: blogCategory.value,
              };
            
              fetch("http://localhost:3000/blogs", {
                method: "POST",
                headers: { 
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
              }).then(() => router.navigate("/Admin/Blogs"))
              
          });
      });
      return `
      ${MainNavAdmin()}
      <div class="container pt-5">
          <form action="" id="form-add">
              <div class="form-group">
                  <label for="" class="form-label">Title</label>
                  <input type="text" class="form-control" id="blog-title" />
              </div>
              <div class="form-group">
                  <label for="" class="form-label">Content</label>
                  <input type="text" class="form-control" id="blog-content" />
              </div>
              <div class="form-group">
                  <label for="" class="form-label">Ảnh</label>
                  <input type="file" class="form-control" id="blog-img" />
              </div>
              <div class="form-group">
                  <select name="" class="form-control" id="blog-category">
                  <option value="Giải trí">Giải trí</option>
                  <option value="Hoạt Hình">Hoạt Hình</option>
                  <option value="Quốc tế">Quốc tế</option>
                </select>
              </div>
              <button style="margin-top:10px;" class="btn btn-primary ">Thêm Post</button>
          </form>
          </div>`;
};

export default AdminBlogsAddPage;