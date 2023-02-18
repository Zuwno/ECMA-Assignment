import MainNavAdmin from "@/components/NavAdmin";
import { router, useEffect } from "@/lib";



const AdminTestmonialAddPage = () => 
{

     useEffect(() => {
          const form = document.querySelector("#form-add");
          const testmonialName = document.querySelector("#testmonial-name");
          const testmonialAvatar = document.querySelector("#testmonial-avatar");
          const testmonialContent = document.querySelector("#testmonial-content");
  
          form.addEventListener("submit", function (e) {
              e.preventDefault();
              
              const formData = {
                
                  name: testmonialName.value,
                  content : testmonialContent.value,
                  avatar : testmonialAvatar.value,
              };
            
              fetch("http://localhost:3000/testmonial", {
                method: "POST",
                headers: { 
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
              }).then(() => router.navigate("/Admin/Testmonial"))
              
          });
      });
      return `
      ${MainNavAdmin()}
      <div class="container pt-5">
          <form action="" id="form-add">
              <div class="form-group">
                  <label for="" class="form-label">Tên</label>
                  <input type="text" class="form-control" id="testmonial-name" />
              </div>
              <div class="form-group">
                  <label for="" class="form-label">Nội dung</label>
                  <input type="text" class="form-control" id="testmonial-content" />
              </div>
              <div class="form-group">
                  <label for="" class="form-label">Ảnh</label>
                  <input type="text" class="form-control" id="testmonial-avatar" />
              </div>
              <button style="margin-top:10px;" class="btn btn-primary ">Thêm</button>
          </form>
          </div>`;
};

export default AdminTestmonialAddPage;