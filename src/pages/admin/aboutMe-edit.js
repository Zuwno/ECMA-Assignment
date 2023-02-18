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
        const AboutMeSrc = document.getElementById("aboutme-src");
        const AboutMeSubtitle = document.getElementById("aboutme-subtitle");
        const AboutMeName = document.getElementById("aboutme-name");

        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const formData = {
                id,
                name : AboutMeName.value ,
                subtitle: AboutMeSubtitle.value,
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
                    <label for="" class="form-label">Nội dung</label>
                    <input type="text" class="form-control" id="aboutme-subtitle" value="${aboutMe.subtitle}" />
                </div>
                <div class="form-group">
                    <label for="" class="form-label">Ảnh</label>
                    <input type="text" class="form-control" id="aboutme-src" value="${aboutMe.src}" />
                </div>
                
                <button class="btn btn-primary">Sửa</button>
            </form>
            </div>
    </div>`;
};

export default AdminAboutMeEditPage;