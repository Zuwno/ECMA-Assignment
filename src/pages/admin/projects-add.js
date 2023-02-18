import MainNavAdmin from "@/components/NavAdmin";
import { router, useEffect } from "@/lib";



const AdminProjectsAddPage = () => 
{

     useEffect(() => {
          const form = document.querySelector("#form-add");
          const projectName = document.querySelector("#project-name");
          const projectCategory = document.querySelector("#project-category");

          const projectImg = document.getElementById("project-img");
    const projectDescribe = document.getElementById("project-describe");
    const projectGithub = document.getElementById("project-github");
    const projectPreview = document.getElementById("project-preview");
    const projectStarttime = document.getElementById("project-starttime");
    const projectEndtime = document.getElementById("project-endtime");
  
          form.addEventListener("submit", function (e) {
              e.preventDefault();
              
              const formData = {
                
                name: projectName.value,
                category: projectCategory.value,
                src: projectImg.value,
                describe: projectDescribe.value,
                github: projectGithub.value,
                preview: projectPreview.value,
                starttime : projectStarttime.value,
                endtime: projectEndtime.value
              };
            
              fetch("http://localhost:3000/projects", {
                method: "POST",
                headers: { 
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
              }).then(() => router.navigate("/Admin/Projects"))
              
          });
      });
      return `
      ${MainNavAdmin()}
      <div class="container pt-5">
          <form action="" id="form-add">
              <div class="form-group">
                  <label for="" class="form-label">Tên Dự Án</label>
                  <input type="text" class="form-control" id="project-name" />
              </div>
              <div class="form-group">
                  <label for="" class="form-label">Danh mục</label>
                  <input type="text" class="form-control" id="project-category" />
              </div>
              <div class="form-group">
                <label for="" class="form-label">Ảnh</label>
                <input type="text" class="form-control" id="project-img"  />
            </div>
            <div class="form-group">
            <label for="" class="form-label">Mô tả</label>
            <input type="text" class="form-control" id="project-describe"  />
        </div>
        <div class="form-group">
        <label for="" class="form-label">Github</label>
        <input type="text" class="form-control" id="project-github"  />
    </div>
    <div class="form-group">
    <label for="" class="form-label">Preview Link</label>
    <input type="text" class="form-control" id="project-preview"  />
</div>
<div class="form-group">
<label for="" class="form-label">Thời gian bắt đầu</label>
<input type="date" class="form-control" id="project-starttime"  />
</div>
<div class="form-group">
<label for="" class="form-label">Thời gian kết thúc</label>
<input type="date" class="form-control" id="project-endtime" />
</div>
              <button style="margin-top:10px;" class="btn btn-primary ">Thêm dự án</button>
          </form>
          </div>`;
};

export default AdminProjectsAddPage;