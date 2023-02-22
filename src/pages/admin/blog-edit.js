import MainNavAdmin from "@/components/NavAdmin";
import { useEffect, router, useState } from "@/lib";
import axios from "axios";

const AdminBlogEditPage = ({ id }) => {
  const [blogs, setBlogs] = useState({});
  useEffect(() => {
    fetch(`http://localhost:3000/blogs/${id}`)
      .then((response) => response.json())
      .then((data) => setBlogs(data));
  }, []);
  useEffect(() => {
    const form = document.querySelector("#form-edit");
    const blogTitle = document.querySelector("#blog-title");
    const blogContent = document.querySelector("#blog-content");
    const blogImg = document.querySelector("#blog-img");
    const blogCategory = document.querySelector("#blog-category");
    const blogSubtitle = document.querySelector("#blog-subtitle");

    form.addEventListener("submit", async function (e) {
      e.preventDefault();
      const urls= await uploadFiles(blogImg.files);
      const formData = {
        id,
        title: blogTitle.value,
        subtitle: blogSubtitle.value,
        content: blogContent.value,
        img: urls,
        category: blogCategory.value,
      };

      fetch("http://localhost:3000/blogs/" + id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }).then(() => router.navigate("/Admin/Blogs"));
    });
  });
  const uploadFiles =async (files)=>{
    if(files){
        const CLOUD_NAME="djfg1b7vt";
        const PRESET_NAME ="upload_portfolio";
        const FOLDER_NAME="ECMA";
        const urls=[];  
        const api=`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;

        const formData =new FormData();
        formData.append('upload_preset',PRESET_NAME);
        formData.append('folder',FOLDER_NAME);

        for(const file of files){
            formData.append('file',file);
           const response = await axios
               .post(api,formData,{
                    headers:{
                        "Content-Type":"multipart/form-data"
                    },
                });
                urls.push(response.data.secure_url)
                // return urls;
        }
        
        return urls;
    }
    
  };
  return `
    ${MainNavAdmin()}
    <div>
        <div class="container pt-5">
        <h1>Sửa giới thiệu</h1>
            <form action="" id="form-edit">
            <div class="form-group">
                  <label for="" class="form-label">Title</label>
                  <input type="text" required class="form-control" id="blog-title" value="${blogs.title}" />
              </div>
              <div class="form-group">
                  <label for="" class="form-label">Subtitle</label>
                  <input type="text" required class="form-control" id="blog-subtitle" value="${blogs.title}" />
              </div>
              <div class="form-group">
                  <label for="" class="form-label">Content</label>
                  <input type="text" required class="form-control" id="blog-content" value="${blogs.content}" />
              </div>
              <div class="form-group">
                  <label for="" class="form-label">Ảnh</label>
                  <input type="file" required class="form-control" id="blog-img" value="${blogs.img}" />
              </div>
              <div class="form-group">
                  <select required name="" class="form-control" id="blog-category">
                  <option value="${blogs.category}">${blogs.category}</option>
                  <option value="Giải trí">Giải trí</option>
                  <option value="Hoạt Hình">Hoạt Hình</option>
                  <option value="Quốc tế">Quốc tế</option>
                </select>
              </div>
                
                <button class="btn btn-primary">Sửa</button>
            </form>
            </div>
    </div>`;
};

export default AdminBlogEditPage;
