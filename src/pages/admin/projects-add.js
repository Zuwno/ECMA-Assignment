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
  
          form.addEventListener("submit", function (e) {
              e.preventDefault();

            //   const urls = await uploadFiles(projectImg.files);
             
              const formData = {
                
                name: projectName.value,
                category: projectCategory.value,
                src: projectImg.value,
                describe: projectDescribe.value,
                github: projectGithub.value,
                preview: projectPreview.value,
                starttime : projectStarttime.value,
                endtime: projectEndtime.value,
                // gallery: urls
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

// const uploadFiles =  async(files) => 
// {
//     if (files)
//     {
//         const CLOUD_NAME = "djfg1b7vt";
//     const PRESET_NAME = "EcmaASM" ;
//     const urls = [];
//     const FOLDER_NAME = "ECMA-Project"
//       const api =  `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload` ;

//       const formDataa = new FormData()
//       formDataa.append("upload_preset", PRESET_NAME);
//       formDataa.append("folder", FOLDER_NAME);

//       for ( const file of files)
//       {
//         formDataa.append("files", file);
//         const response = await axios.post(api,formDataa,
//             {
//                 headers: 
//                 {
//                     "Content-Type": "multipart/form-data",
//                 },
//             }).then((response) => urls.push(response.data.secure_url))
        
//       }
//       console.log(urls);
//     //   return urls;
//     }
// };

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
                <input type="file" class="form-control" multiple id="project-img"  />
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