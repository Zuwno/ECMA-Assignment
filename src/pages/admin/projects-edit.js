import { useEffect, router, useState } from "@/lib";

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

        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const formData = {
                id,
                name: projectName.value,
                category: projectCategory.value,
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
    return `<div>
        <div class="container pt-5">
        <h1>Sửa dự án</h1>
            <form action="" id="form-edit">
                <div class="form-group">
                    <label for="" class="form-label">Tên Dự án</label>
                    <input type="text" class="form-control" id="project-name" value="${project.name}"/>
                </div>
                <div class="form-group">
                    <label for="" class="form-label">Danh mục</label>
                    <input type="text" class="form-control" id="project-category" value="${project.category}" />
                </div>
                <button class="btn btn-primary">Sửa dự án</button>
            </form>
            </div>
    </div>`;
};

export default AdminProjectEditPage;