import Header from "../components/Header";
import { projects } from "../Data"
const ProjectDetailPage = ({ id }) => 
{
        
        const CurrentProject = projects.find((project) => project.id == id)
        if(!CurrentProject)  return "Loading..";
        return `
        ${Header()}
            <div>${CurrentProject.name} </div>
            ${
                CurrentProject.teams
                    ? `
                         <ul>
                            ${CurrentProject.teams
                                .map((member) => {
                                    return `<li>${member.name}</li>`;
                                })
                                .join("")}
                        </ul>
                        `
                    : ""
            }
            
        `;
};
export default ProjectDetailPage;