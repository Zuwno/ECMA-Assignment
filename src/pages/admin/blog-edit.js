import MainNavAdmin from "@/components/NavAdmin";
import { useEffect, router, useState } from "@/lib";

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

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const formData = {
        id,
        title: blogTitle.value,
        content: blogContent.value,
        img: blogImg.value,
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
  return `
    ${MainNavAdmin()}
    <div>
        <div class="container pt-5">
        <h1>Sửa giới thiệu</h1>
            <form action="" id="form-edit">
            <div class="form-group">
                  <label for="" class="form-label">Title</label>
                  <input type="text" class="form-control" id="blog-title" value="${blogs.title}" />
              </div>
              <div class="form-group">
                  <label for="" class="form-label">Content</label>
                  <input type="text" class="form-control" id="blog-content" value="${blogs.content}" />
              </div>
              <div class="form-group">
                  <label for="" class="form-label">Ảnh</label>
                  <input type="file" class="form-control" id="blog-img" value="${blogs.img}" />
              </div>
              <div class="form-group">
                  <select name="" class="form-control" id="blog-category">
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
