import MainNavAdmin from "@/components/NavAdmin";
import { useEffect, router, useState } from "@/lib";
import axios from "axios";

const AdminProjectEditPage = ({ id }) => {
  // const projects = JSON.parse(localStorage.getItem("projects") || []);

  // const currentProject = projects.find((project) => project.id == id);

  const [project, setProject] = useState({});
  useEffect(() => {
    fetch(`http://localhost:3000/projects/${id}`)
      .then((response) => response.json())
      .then((data) => setProject(data));
  }, []);
  useEffect(() => {
    const form = document.getElementById("form-edit");
    const projectName = document.getElementById("project-name");
    const projectCategory = document.getElementById("project-category");

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
        id,
        name: projectName.value,
        category: projectCategory.value,
        src: urls,
        describe: projectDescribe.value,
        github: projectGithub.value,
        preview: projectPreview.value,
        starttime : projectStarttime.value,
        endtime: projectEndtime.value
      };

      fetch("http://localhost:3000/projects/" + id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }).then(() => router.navigate("/Admin/Projects"));
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
  
  <div>
        <div class="container pt-5">
        <h1>Sửa dự án</h1>
            <form action="" id="form-edit">
                <div class="form-group">
                    <label for="" class="form-label">Tên Dự án</label>
                    <input type="text" required class="form-control" id="project-name" value="${project.name}"/>
                </div>
                <div class="form-group">
                    <label for="" class="form-label">Danh mục</label>
                    <select name="" required class="form-control" id="project-category">
                    <option value="${project.category}">${project.category}</option>
                  <option value="HTML5 & CSS3">HTML5 & CSS3</option>
                  <option value="Javascript">Javascript</option>
                  <option value="Nodejs">Nodejs</option>
                  <option value="Reactjs">Reactjs</option>
                </select>
                </div>
                <div class="form-group">
                <label for="" class="form-label">Ảnh</label>
                <input type="file" required class="form-control" multiple id="project-img" value="${project.src}"  />
            </div>
            <div class="form-group">
            <label for="" class="form-label">Mô tả</label>
            <input type="text" required class="form-control" id="project-describe" value="${project.describe}" />
        </div>
        <div class="form-group">
        <label for="" class="form-label">Github</label>
        <input type="text" required class="form-control" id="project-github" value="${project.github}" />
    </div>
    <div class="form-group">
    <label for="" class="form-label">Preview Link</label>
    <input type="text" required class="form-control" id="project-preview" value="${project.preview}" />
</div>
<div class="form-group">
<label for="" class="form-label">Thời gian bắt đầu</label>
<input type="date" required class="form-control" id="project-starttime" value="${project.starttime}" />
</div>
<div class="form-group">
<label for="" class="form-label">Thời gian kết thúc</label>
<input type="date" required class="form-control" id="project-endtime" value="${project.endtime}" />
</div>
                <button class="btn btn-primary">Sửa dự án</button>
            </form>
            </div>
    </div>`;
};

export default AdminProjectEditPage;
