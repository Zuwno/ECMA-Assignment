import MainNavAdmin from "@/components/NavAdmin";
import { useEffect, useState } from "@/lib";

const AdminSkillsPage = () => {

  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/skills")
            .then((response) => response.json())
            .then(( data ) => setSkills(data));
  },[]);

  useEffect(function () {
    const btns = document.querySelectorAll(".btn-remove");
    for (let btn of btns) {
      btn.addEventListener("click", function () {
        const id = btn.dataset.id;
        fetch(`http://localhost:3000/skills/${id}`, 
        {
          method: "DELETE",
        }).then(() => { const NewSkills = skills.filter((skill) => skill.id != id);
          setSkills(NewSkills);})
        
      });
    }
  });

  return `
  ${MainNavAdmin()}
  
  <div class="container pt-5">
            <h1>Quản lý Kỹ năng</h1>
            <p class="btn"> <a href="#/Admin/Skills/Add">Thêm mới</a> </p>
            <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Tên kỹ năng</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                    ${
                      skills.map((skill, index) => {
                                    return `
                                <tr>
                                    <td>${index + 1}</td>
                                    <td>${skill.name}</td>
                                    <td>
                                        <button data-name="DataName" data-id="${
                                          skill.id
                                        }"class="btn btn-danger btn-remove">Remove</button>
                                        <a href="#/Admin/Skill/${skill.id}/Edit">Edit</a>
                                    </td>
                                </tr>
                            `;
                          })
                          .join("")}
                        
                    </tbody>
                </table>
    </div>`;
};

export default AdminSkillsPage;


