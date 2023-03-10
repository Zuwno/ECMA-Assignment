import MainNavAdmin from "@/components/NavAdmin";
import { router, useEffect } from "@/lib";
import axios from "axios";



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
  
          form.addEventListener("submit", async function (e) {
              e.preventDefault();
              const urls= await uploadFiles(projectImg.files);
           
             
              const formData = {
                
                name: projectName.value,
                category: projectCategory.value,
                src: urls,
                describe: projectDescribe.value,
                github: projectGithub.value,
                preview: projectPreview.value,
                starttime : projectStarttime.value,
                endtime: projectEndtime.value,
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
      const uploadFiles =async (files)=>{
        if(files){
            const CLOUD_NAME="djfg1b7vt";
            const PRESET_NAME ="upload_portfolio";
            const FOLDER_NAME="ECMA";
            const urls=[];  
            const api=`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;
    
            const formData =new FormData();
            formData.append('upload_preset',PRESET_NAME);
            formData.append('folder',FOLDER_NAME);
    
            for(const file of files){
                formData.append('file',file);
               const response = await axios
                   .post(api,formData,{
                        headers:{
                            "Content-Type":"multipart/form-data"
                        },
                    });
                    urls.push(response.data.secure_url)
                    // return urls;
            }
            
            return urls;
        }
        
      };

      return `
      ${MainNavAdmin()}
      <div class="container pt-5">
          <form action="" id="form-add">
              <div class="form-group">
                  <label for="" class="form-label">T??n D??? ??n</label>
                  <input type="text" required class="form-control" id="project-name" />
              </div>
              <div class="form-group">
                  <label for="" class="form-label">Danh m???c</label>
                  <select name="" required class="form-control" id="project-category">
                  <option value="HTML5 & CSS3">HTML5 & CSS3</option>
                  <option value="Javascript">Javascript</option>
                  <option value="Nodejs">Nodejs</option>
                  <option value="Reactjs">Reactjs</option>
              </div>
              <div class="form-group">
                <label for="" class="form-label">???nh</label>
                <input type="file" required class="form-control" multiple id="project-img"  />
            </div>
            <div class="form-group">
            <label for="" class="form-label">M?? t???</label>
            <input type="text" required class="form-control" id="project-describe"  />
        </div>
        <div class="form-group">
        <label for="" class="form-label">Github</label>
        <input type="text" required class="form-control" id="project-github"  />
    </div>
    <div class="form-group">
    <label for="" class="form-label">Preview Link</label>
    <input type="text" required class="form-control" id="project-preview"  />
</div>
<div class="form-group">
<label for="" class="form-label">Th???i gian b???t ?????u</label>
<input type="date" required class="form-control" id="project-starttime"  />
</div>
<div class="form-group">
<label for="" class="form-label">Th???i gian k???t th??c</label>
<input type="date" required class="form-control" id="project-endtime" />
</div>
              <button style="margin-top:10px;" class="btn btn-primary ">Th??m d??? ??n</button>
          </form>
          </div>`;
};

export default AdminProjectsAddPage;