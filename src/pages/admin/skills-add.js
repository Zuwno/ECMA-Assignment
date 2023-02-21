import MainNavAdmin from "@/components/NavAdmin";
import { router, useEffect } from "@/lib";
import axios from "axios";


const AdminSkillsAddPage = () => 
{

     useEffect(() => {
          const form = document.querySelector("#form-add");
          const skillName = document.querySelector("#skill-name");
          const skillSRC = document.querySelector("#skill-src");
          const skillSubtitle = document.querySelector("#skill-subtitle");
  
          form.addEventListener("submit", async  function (e) {
              e.preventDefault();
              const urls= await uploadFiles(skillSRC.files);
              const formData = {
                
                  name: skillName.value,
                  src: urls,
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
                  <label for="" class="form-label">Tên Kỹ năng</label>
                  <input type="text" class="form-control" id="skill-name" />
              </div>
              <div class="form-group">
                  <label for="" class="form-label">Subtitle</label>
                  <input type="text" class="form-control" id="skill-subtitle" />
              </div>
              <div class="form-group">
                  <label for="" class="form-label">SRC</label>
                  <input type="file" class="form-control" id="skill-src" />
              </div>
              <button style="margin-top:10px;" class="btn btn-primary ">Thêm kỹ năng</button>
          </form>
          </div>`;
};

export default AdminSkillsAddPage;