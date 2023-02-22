import MainNavAdmin from "@/components/NavAdmin";
import { useEffect, router, useState } from "@/lib";
import axios from "axios";
const AdminSkillEditPage = ({ id }) => {
    // const projects = JSON.parse(localStorage.getItem("projects") || []);

    // const currentProject = projects.find((project) => project.id == id);

    const [skill, setSkill] = useState({});
    useEffect(() => {
        fetch(`http://localhost:3000/skills/${id}`)
            .then((response) => response.json())
            .then((data) => setSkill(data));
    }, []);
    useEffect(() => {
        const form = document.getElementById("form-edit");
        const skillName = document.getElementById("skill-name");
        const skillSrc = document.getElementById("skill-src");
        const skillSubtitle = document.getElementById("skill-subtitle");

        form.addEventListener("submit", async  function (e) {
            e.preventDefault();
            const urls= await uploadFiles(skillSrc.files);
            const formData = {
                id,
                name: skillName.value,
                src: urls,
                subtitle: skillSubtitle.value,
            };

            fetch("http://localhost:3000/skills/" + id, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            }).then(() => router.navigate("/Admin/Skills"));
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
        <h1>Sửa kỹ năng</h1>
            <form action="" id="form-edit">
                <div class="form-group">
                    <label for="" class="form-label">Tên Kỹ năng</label>
                    <input type="text" required class="form-control" id="skill-name" value="${skill.name}"/>
                </div>
                <div class="form-group">
                    <label for="" class="form-label">Subtitle</label>
                    <input type="text"  class="form-control" id="skill-subtitle" value="${skill.subtitle}" />
                </div>
                <div class="form-group">
                    <label for="" class="form-label">SRC</label>
                    <input type="file" required class="form-control" id="skill-src" value="${skill.src}" />
                </div>
                
                <button class="btn btn-primary">Sửa kỹ năng</button>
            </form>
            </div>
    </div>`;
};

export default AdminSkillEditPage;