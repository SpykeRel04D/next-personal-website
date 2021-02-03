import { useContext } from 'react';
import { LanguageContext } from '../../../context/languageContext';
import ProjectCard from '../../ProjectCard/';

export default function Projects() {
    const { dictionary } = useContext(LanguageContext);
    return(
        <div className="section">
            <h2 className="sectionTitle">{dictionary.projects.title}</h2>
            <div className="sectionContentZone">
                <ProjectCard name="personal-website" thumbnail="project_personal-website.png" 
                    back={{title: dictionary.projects.list.project06.title, description: dictionary.projects.list.project06.description , year: 2021, techs:["NextJS","TypeScript","CSS3","SASS"]}}
                />
                <ProjectCard name="consultant-firm" thumbnail="project_consultant-firm.png" 
                    back={{title: dictionary.projects.list.project05.title, description: dictionary.projects.list.project05.description , year: 2020, techs:["ReactJS","CSS3","SASS","NodeJS","MySQL"]}}
                />
                <ProjectCard name="cq-mobile" thumbnail="project_cq-mobile.png" 
                    back={{title: dictionary.projects.list.project04.title, description: dictionary.projects.list.project04.description, year: 2019, techs:["Unity3D","Objective-C","DynamoDB"]}}
                />
                <ProjectCard name="cosmosquest" thumbnail="project_cosmosquest.png" 
                    back={{title: dictionary.projects.list.project03.title, description: dictionary.projects.list.project03.description, year: 2017, techs:["HTML5","JavaScript","NodeJS"]}}
                />
                <ProjectCard name="project-iv" thumbnail="project_project-iv.png"
                    back={{title: dictionary.projects.list.project02.title, description: dictionary.projects.list.project02.description, year: 2017, techs:["UnrealEngine","CPlusPlus","NodeJS"]}}
                />
                <ProjectCard name="hoogs" thumbnail="project_hoogs.png" 
                    back={{title: dictionary.projects.list.project01.title, description: dictionary.projects.list.project01.description, year: 2015, techs:["CoronaSDK","Lua"]}}
                />
            </div>
        </div>
    );
}