
import 'bootstrap/dist/css/bootstrap.min.css'
import { render, router } from "./src/lib";
import HomePage from "./src/pages/Home";
// import ProjectDetailPage from "./src/pages/Project-detail";
import NotFoundPage from "./src/pages/not-found";
import AdminProjectsPage from "./src/pages/admin/projects";
import AdminProjectsAddPage from "./src/pages/admin/projects-add";
import AdminProjectEditPage from "./src/pages/admin/projects-edit";
import AdminSkillsPage from '@/pages/admin/skills';
import AdminSkillEditPage from '@/pages/admin/skills-edit';
import AdminSkillsAddPage from '@/pages/admin/skills-add';
import AdminContactsPage from '@/pages/admin/contact';


const app = document.querySelector("#app");


router.on ("",() => render(HomePage,app) );

// // router.on ("/Projects/:id", ({data}) => render(() => ProjectDetailPage(data),app));
router.on ("Admin/Projects", () => render(AdminProjectsPage, app))
router.on ("Admin/Projects/Add" , () => render(AdminProjectsAddPage, app))
router.on("/Admin/Project/:id/Edit", ({ data }) => render(() => AdminProjectEditPage(data), app));
router.on ("Admin/Skills", () => render(AdminSkillsPage, app))
router.on ("Admin/Skills/Add" , () => render(AdminSkillsAddPage, app))
router.on("/Admin/Skill/:id/Edit", ({ data }) => render(() => AdminSkillEditPage(data), app));
router.on ("Admin/Contacts", () => render(AdminContactsPage, app))

router.notFound( () => render(NotFoundPage,app) );



router.resolve();
