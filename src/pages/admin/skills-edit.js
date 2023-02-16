import { useEffect, router, useState } from "@/lib";

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

        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const formData = {
                id,
                name: skillName.value,
                src: skillSrc.value,
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
    return `<div>
        <div class="container pt-5">
        <h1>Sửa kỹ năng</h1>
            <form action="" id="form-edit">
                <div class="form-group">
                    <label for="" class="form-label">Tên Kỹ năng</label>
                    <input type="text" class="form-control" id="skill-name" value="${skill.name}"/>
                </div>
                <div class="form-group">
                    <label for="" class="form-label">Subtitle</label>
                    <input type="text" class="form-control" id="skill-subtitle" value="${skill.subtitle}" />
                </div>
                <div class="form-group">
                    <label for="" class="form-label">SRC</label>
                    <input type="text" class="form-control" id="skill-src" value="${skill.src}" />
                </div>
                
                <button class="btn btn-primary">Sửa kỹ năng</button>
            </form>
            </div>
    </div>`;
};

export default AdminSkillEditPage;