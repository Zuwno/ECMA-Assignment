import MainNavAdmin from "@/components/NavAdmin";
import { useEffect, router, useState } from "@/lib";
import axios from "axios";

const AdminAboutMeEditPage = ({ id }) => {

    const [aboutMe, setaboutMe] = useState({});
    useEffect(() => {
        fetch(`http://localhost:3000/aboutme/${id}`)
            .then((response) => response.json())
            .then((data) => setaboutMe(data));
    }, []);
    useEffect(() => {
        const form = document.getElementById("form-edit");
        const AboutMeName = document.getElementById("aboutme-name");
        const AboutMeTitle = document.getElementById("aboutme-title");
        const AboutMeSubTitle = document.getElementById("aboutme-subtitle");
        const AboutMeSrc = document.getElementById("aboutme-src");
        const AboutMeImg = document.getElementById("aboutme-img");
        

        form.addEventListener("submit", async function (e) {
            e.preventDefault();
            const urls= await uploadFiles(AboutMeImg.files);
            const formData = {
                id,
                name : AboutMeName.value ,
                title: AboutMeTitle.value,
                subtitle: AboutMeSubTitle.value,
                img: urls,
                src: AboutMeSrc.value,
                
            };

            fetch("http://localhost:3000/aboutme/" + id, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            }).then(() => router.navigate("/Admin/AboutMe"));
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
        <h1>Sửa giới thiệu</h1>
            <form action="" id="form-edit">
            <div class="form-group">
                    <label for="" class="form-label">Tên</label>
                    <input type="text" required class="form-control" id="aboutme-name" value="${aboutMe.name}" />
                </div>
                <div class="form-group">
                    <label for="" class="form-label">Title</label>
                    <input type="text" required class="form-control" id="aboutme-title" value="${aboutMe.title}" />
                </div>
                <div class="form-group">
                    <label for="" class="form-label">Subtitle</label>
                    <input type="text" required class="form-control" id="aboutme-subtitle" value="${aboutMe.subtitle}" />
                </div>
                <div class="form-group">
                    <label for="" class="form-label">Link Visit</label>
                    <input type="text" required class="form-control" id="aboutme-src" value="${aboutMe.src}" />
                </div>
                <div class="form-group">
                    <label for="" class="form-label">Ảnh</label>
                    <input type="file" class="form-control" id="aboutme-img" value="${aboutMe.img}" />
                </div>
                
                <button class="btn btn-primary">Sửa</button>
            </form>
            </div>
    </div>`;
};

export default AdminAboutMeEditPage;