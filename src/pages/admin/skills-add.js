import { router, useEffect } from "@/lib";



const AdminSkillsAddPage = () => 
{

     useEffect(() => {
          const form = document.querySelector("#form-add");
          const skillName = document.querySelector("#skill-name");
          const skillSRC = document.querySelector("#skill-src");
          const skillSubtitle = document.querySelector("#skill-subtitle");
  
          form.addEventListener("submit", function (e) {
              e.preventDefault();
              
              const formData = {
                
                  name: skillName.value,
                  src: skillSRC.value,
                  subtitle: skillSubtitle.value,
              };
            
              fetch("http://localhost:3000/skills", {
                method: "POST",
                headers: { 
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
              }).then(() => router.navigate("/Admin/Skills"))
              
          });
      });
      return `<div class="container pt-5">
          <form action="" id="form-add">
              <div class="form-group">
                  <label for="" class="form-label">Tên Kỹ năng</label>
                  <input type="text" class="form-control" id="skill-name" />
              </div>
              <div class="form-group">
                  <label for="" class="form-label">Subtitle</label>
                  <input type="text" class="form-control" id="skill-subtitle" />
              </div>
              <div class="form-group">
                  <label for="" class="form-label">SRC</label>
                  <input type="text" class="form-control" id="skill-src" />
              </div>
              <button style="margin-top:10px;" class="btn btn-primary ">Thêm kỹ năng</button>
          </form>
          </div>`;
};

export default AdminSkillsAddPage;