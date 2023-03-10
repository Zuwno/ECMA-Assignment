import MainNavAdmin from "@/components/NavAdmin";
import { useEffect, useState } from "@/lib";

const AdminAboutMePage = () => {

  const [aboutMe, setaboutMe] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/aboutme")
            .then((response) => response.json())
            .then(( data ) => setaboutMe(data));
  },[]);

  return `
  ${MainNavAdmin()}
  
  <div class="container pt-5">
            <h1>Giới thiệu</h1>
            <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Tên</th>
                            <th>Title</th>
                            <th>Subtitle</th>
                            <th>Link Visit</th>
                            <th>Ảnh</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                    ${
                      aboutMe.map((aboutMe, index) => {
                                    return `
                                <tr>
                                    <td>${index + 1}</td>
                                    <td>${aboutMe.name}</td>
                                    <td>${aboutMe.title}</td>
                                    <td>${aboutMe.subtitle}</td>
                                    <td>${aboutMe.src}</td>
                                    <td><img style=" width: 50px ;" src="${aboutMe.img}" alt=""></td>
                                    <td><a href="#/Admin/AboutMe/${aboutMe.id}/Edit">Edit</a> </td>
                                
                                </tr>
                            `;
                          })
                          .join("")}
                        
                    </tbody>
                </table>
    </div>`;
};

export default AdminAboutMePage;


