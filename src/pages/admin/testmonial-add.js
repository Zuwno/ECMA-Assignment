import MainNavAdmin from "@/components/NavAdmin";
import { router, useEffect } from "@/lib";
import axios from "axios";


const AdminTestmonialAddPage = () => 
{

     useEffect(() => {
          const form = document.querySelector("#form-add");
          const testmonialName = document.querySelector("#testmonial-name");
          const testmonialAvatar = document.querySelector("#testmonial-avatar");
          const testmonialContent = document.querySelector("#testmonial-content");
  
          form.addEventListener("submit", async function (e) {
              e.preventDefault();
              const urls= await uploadFiles(testmonialAvatar.files);
              const formData = {
                
                  name: testmonialName.value,
                  content : testmonialContent.value,
                  avatar : urls,
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
            
            }
            
            return urls;
        }
        
      };
      return `
      ${MainNavAdmin()}
      <div class="container pt-5">
          <form action="" id="form-add">
              <div class="form-group">
                  <label for="" class="form-label">T??n</label>
                  <input type="text" required class="form-control" id="testmonial-name" />
              </div>
              <div class="form-group">
                  <label for="" class="form-label">N???i dung</label>
                  <input type="text" required class="form-control" id="testmonial-content" />
              </div>
              <div class="form-group">
                  <label for="" class="form-label">???nh</label>
                  <input type="file" required class="form-control" id="testmonial-avatar" />
              </div>
              <button style="margin-top:10px;" class="btn btn-primary ">Th??m</button>
          </form>
          </div>`;
};

export default AdminTestmonialAddPage;