import MainNavAdmin from "@/components/NavAdmin";
import { useEffect, router, useState } from "@/lib";

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
        

        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const formData = {
                id,
                name : AboutMeName.value ,
                title: AboutMeTitle.value,
                subtitle: AboutMeSubTitle.value,
                img: AboutMeImg.value,
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
    return `
    ${MainNavAdmin()}
    <div>
        <div class="container pt-5">
        <h1>Sửa giới thiệu</h1>
            <form action="" id="form-edit">
            <div class="form-group">
                    <label for="" class="form-label">Tên</label>
                    <input type="text" class="form-control" id="aboutme-name" value="${aboutMe.name}" />
                </div>
                <div class="form-group">
                    <label for="" class="form-label">Title</label>
                    <input type="text" class="form-control" id="aboutme-title" value="${aboutMe.title}" />
                </div>
                <div class="form-group">
                    <label for="" class="form-label">Subtitle</label>
                    <input type="text" class="form-control" id="aboutme-subtitle" value="${aboutMe.subtitle}" />
                </div>
                <div class="form-group">
                    <label for="" class="form-label">Link Visit</label>
                    <input type="text" class="form-control" id="aboutme-src" value="${aboutMe.src}" />
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