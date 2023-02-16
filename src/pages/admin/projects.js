import { useEffect, useState } from "@/lib";

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

  return `<div class="container pt-5">
            <h1>Quản lý dự án</h1>
            <p class="btn"> <a href="#/Admin/Projects/Add">Thêm mới</a> </p>
            <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Tên dự án</th>
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


