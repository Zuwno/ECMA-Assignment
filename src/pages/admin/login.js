import { useEffect, router, useState } from "@/lib";

const AdminLoginPage = () => {
  // const projects = JSON.parse(localStorage.getItem("projects") || []);

  // const currentProject = projects.find((project) => project.id == id);

  const [Data, setData] = useState({});
  useEffect(() => {
    fetch(`http://localhost:3000/account/`)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  useEffect(() => {
    const form = document.getElementById("form-edit");
    const username = document.getElementById("project-username");
    const password = document.getElementById("project-password");


    form.addEventListener("submit", function (e) {
      e.preventDefault();

      
      if( username == 'admin' && password == 'admin')
      {

        router.navigate("/Admin/Projects")
      }

      
    });
  });
  return `
  
  <div>
        <div class="container pt-5">
        <h1>Đăng nhập</h1>
            <form action="" id="form-edit">
                <div class="form-group">
                    <label for="" class="form-label">Tài Khoản</label>
                    <input type="text" required class="form-username" id="project-name" />
                </div>
                <div class="form-group">
                    <label for="" class="form-label">Mật khẩu</label>
                    <input type="password"  required class="form-password" id="project-category"  />
                </div>
                <button class="btn btn-primary">Đăng nhập</button>
            </form>
            </div>
    </div>`;
};

export default AdminLoginPage;
