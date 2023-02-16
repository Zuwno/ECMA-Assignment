import { useEffect, useState } from "@/lib";

const AdminContactsPage = () => {

  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/contacts")
            .then((response) => response.json())
            .then(( data ) => setContacts(data));
  },[]);

  useEffect(function () {
    const btns = document.querySelectorAll(".btn-remove");
    for (let btn of btns) {
      btn.addEventListener("click", function () {
        const id = btn.dataset.id;
        fetch(`http://localhost:3000/contacts/${id}`, 
        {
          method: "DELETE",
        }).then(() => { const NewContacts = contacts.filter((contact) => contact.id != id);
          setContacts(NewContacts);})
        
      });
    }
  });

  return `<div class="container pt-5">
            <h1>Quản lý Contact</h1>
            <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Tên người gửi</th>
                            <th>Email</th>
                            <th>Nội dung</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                    ${
                      contacts.map((contact, index) => {
                                    return `
                                <tr>
                                    <td>${index + 1}</td>
                                    <td>${contact.name}</td>
                                    <td>${contact.email}</td>
                                    <td>${contact.content}</td>
                                    <td>
                                        <button data-name="DataName" data-id="${
                                          contact.id}"class="btn btn-danger btn-remove">Remove</button>
                    
                                    </td>
                                </tr>
                            `;
                          })
                          .join("")}
                        
                    </tbody>
                </table>
    </div>`;
};

export default AdminContactsPage;


