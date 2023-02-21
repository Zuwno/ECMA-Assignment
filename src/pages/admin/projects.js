import { useEffect, useState } from "@/lib";
import MainNavAdmin from "@/components/NavAdmin";

const AdminProjectsPage = () => {

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/projects")
            .then((response) => response.json())
            .then(( data ) => setProjects(data));
  },[]);
  
  useEffect(function () {
    const btns = document.querySelectorAll(".btn-remove");
    for (let btn of btns) {
      btn.addEventListener("click", function () {
        const id = btn.dataset.id;
        fetch(`http://localhost:3000/projects/${id}`, 
        {
          method: "DELETE",
        }).then(() => { const NewProjects = projects.filter((project) => project.id != id);
          setProjects(NewProjects);})
        
      });
    }
  });

  return `
  ${MainNavAdmin()}
  
  <div class="container pt-5">
            <h1>Quản lý dự án</h1>
            <p class="btn"> <a href="#/Admin/Projects/Add">Thêm mới</a> </p>
            <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Tên dự án</th>
                            <th>Category</th>
                            <th>Ảnh</th>
                            <th>Mô tả</th>
                            <th>Github</th>
                            <th>Preview</th>
                            <th>Thời gian bắt đầu</th>
                            <th>Thời gian kết thúc</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                    ${
                      projects.map((project, index) => {
                                    return `
                                <tr>
                                    <td>${index + 1}</td>
                                    <td>${project.name}</td>
                                    <td>${project.category}</td>
                                    <td><img style=" width: 50px ;" src="${project.src}" alt=""></td>
                                    <td>${project.describe}</td>
                                    <td>${project.github}</td>
                                    <td>${project.preview}</td>
                                    <td>${project.starttime}</td>
                                    <td>${project.endtime}</td>
                                    <td>
                                        <button data-name="DataName" data-id="${
                                          project.id
                                        }"class="btn btn-danger btn-remove">Remove</button>
                                        <a href="#/Admin/Project/${project.id}/Edit">Edit</a>
                                    </td>
                                </tr>
                            `;
                          })
                          .join("")}
                        
                    </tbody>
                </table>
    </div>`;
};

export default AdminProjectsPage;


