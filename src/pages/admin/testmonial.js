import MainNavAdmin from "@/components/NavAdmin";
import { useEffect, useState } from "@/lib";

const AdminTestmonialPage = () => {

  const [Testmonial, setTestmonial] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/testmonial")
            .then((response) => response.json())
            .then(( data ) => setTestmonial(data));
  },[]);

  useEffect(function () {
    const btns = document.querySelectorAll(".btn-remove");
    for (let btn of btns) {
      btn.addEventListener("click", function () {
        const id = btn.dataset.id;
        fetch(`http://localhost:3000/testmonial/${id}`, 
        {
          method: "DELETE",
        }).then(() => { const NewTestmonial = Testmonial.filter((Testmonial) => Testmonial.id != id);
            setTestmonial(NewTestmonial);})
        
      });
    }
  });

  return `
  ${MainNavAdmin()}
  
  <div class="container pt-5">
            <h1>Testmonial</h1>
            <p class="btn"> <a href="#/Admin/Testmonial/Add">Thêm mới</a> </p>
            <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Tên</th>
                            <th>Nội dung</th>
                            <th>Ảnh</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                    ${
                        Testmonial.map((testmonial, index) => {
                                    return `
                                <tr>
                                    <td>${index + 1}</td>
                                    <td>${testmonial.name}</td>
                                    <td>${testmonial.content}</td>
                                    <td>${testmonial.avatar}</td>
                                    <td>
                                    <button data-name="DataName" data-id="${
                                        testmonial.id
                                      }"class="btn btn-danger btn-remove">Remove</button>
                                    <a href="#/Admin/Testmonial/${testmonial.id}/Edit">Edit</a> </td>
                                
                                </tr>
                            `;
                          })
                          .join("")}
                        
                    </tbody>
                </table>
    </div>`;
};

export default AdminTestmonialPage;


