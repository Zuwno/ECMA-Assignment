import { useEffect, router, useState } from "@/lib";

const AdminTestmonialEditPage = ({ id }) => {
 

    const [Testmonial, setTestmonial] = useState({});
    useEffect(() => {
        fetch(`http://localhost:3000/testmonial/${id}`)
            .then((response) => response.json())
            .then((data) => setTestmonial(data));
    }, []);
    useEffect(() => {
        const form = document.querySelector("#form-add");
        const testmonialName = document.querySelector("#testmonial-avatar");
        const testmonialAvatar = document.querySelector("#testmonial-avatar");
        const testmonialContent = document.querySelector("#testmonial-content");

        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const formData = {
                id,
                name: testmonialName.value,
                content : testmonialContent.value,
                avatar : testmonialAvatar.value,
            };

            fetch("http://localhost:3000/testmonial/" + id, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            }).then(() => router.navigate("/Admin/Testmonial"));
        });
    });
    return `<div class="container pt-5">
          <form action="" id="form-add">
              <div class="form-group">
                  <label for="" class="form-label">Tên</label>
                  <input type="text" class="form-control" value="${Testmonial.name}" id="testmonial-name" />
              </div>
              <div class="form-group">
                  <label for="" class="form-label">Nội dung</label>
                  <input type="text" class="form-control" value="${Testmonial.content}" id="testmonial-content" />
              </div>
              <div class="form-group">
                  <label for="" class="form-label">Ảnh</label>
                  <input type="text" class="form-control" value="${Testmonial.avatar}" id="testmonial-avatar" />
              </div>
              <button style="margin-top:10px;" class="btn btn-primary ">Sửa</button>
          </form>
          </div>`;
};

export default AdminTestmonialEditPage;