import MainNavAdmin from "@/components/NavAdmin";
import { useEffect, useState } from "@/lib";

const AdminBlogsPage = () => {

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/blogs")
            .then((response) => response.json())
            .then(( data ) => setBlogs(data));
  },[]);

  useEffect(function () {
    const btns = document.querySelectorAll(".btn-remove");
    for (let btn of btns) {
      btn.addEventListener("click", function () {
        const id = btn.dataset.id;
        fetch(`http://localhost:3000/blogs/${id}`, 
        {
          method: "DELETE",
        }).then(() => { const NewBlog = blogs.filter((blog) => blog.id != id);
          setBlogs(NewBlog);})
        
      });
    }
  });

  return `
  ${MainNavAdmin()}
  <div class="container pt-5">
            <h1>Quản lý Post</h1>
            <p class="btn"> <a href="#/Admin/Blogs/Add">Thêm mới</a> </p>
            <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Content</th>
                            <th>Ảnh</th>
                            <th>Category</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                    ${
                      blogs.map((blog, index) => {
                                    return `
                                <tr>
                                    <td>${index + 1}</td>
                                    <td>${blog.title}</td>
                                    <td>${blog.content}</td>
                                    <td>${blog.img}</td>
                                    <td>${blog.category}</td>
                                    <td>
                                        <button data-name="DataName" data-id="${
                                          blog.id}"class="btn btn-danger btn-remove">Remove</button>
                                          <a href="#/Admin/Blog/${blog.id}/Edit">Edit</a>
                    
                                    </td>
                                </tr>
                            `;
                          })
                          .join("")}
                        
                    </tbody>
                </table>
    </div>`;
};

export default AdminBlogsPage;


