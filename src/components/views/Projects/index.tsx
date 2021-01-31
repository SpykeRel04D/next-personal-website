import ProjectCard from '../../ProjectCard/';

export default function Projects() {
    return(
        <div className="section">
            <h2 className="sectionTitle">PROJECTS</h2>
            <div className="sectionContentZone">
                <ProjectCard name="personal-website" thumbnail="project_personal-website.png" 
                    back={{title: "Personal Website", description: "The main idea of this website is to have a way to share a little bit about me in the same time that I have a first experience with NextJS and TypeScript. All the website has been developed without using any template.", year: 2021, techs:["NextJS","TypeScript","CSS3","SASS"]}}
                />
                <ProjectCard name="consultant-firm" thumbnail="project_consultant-firm.png" 
                    back={{title: "Web Platform", description: "This project consist in a web platform to work as a client portal for a Consultant Firm, that is 100% scalable and personalitzable. All the project has been developed only by me on ReactJS and a NodeJS API Rest that takes all the data from a MySQL server (MVC Model).", year: 2020, techs:["ReactJS","CSS3","SASS","NodeJS","MySQL"]}}
                />
                <ProjectCard name="cq-mobile" thumbnail="project_cq-mobile.png" 
                    back={{title: "Cosmos Quest Mobile", description: "Cosmos Quest Mobile is the second version of Cosmos Quest. Due to the good results obtained on the original game, Kongregate contacted to us in a Publisher role in order to develop a new game for mobile devices, this time in pixel art and working toguether. The game is published on the Apple Store and Play Store.", year: 2019, techs:["Unity3D","Objective-C","DynamoDB"]}}
                />
                <ProjectCard name="cosmosquest" thumbnail="project_cosmosquest.png" 
                    back={{title: "Cosmos Quest", description: "Cosmos Quest is a Web Browser game published on Kongregate, based on the Kardashev Scale, a theory about technological advanced based on the energy usage of a Civilization. The game was developed by a team of three (2 programmers and 1 artist) in HTML5 (making full use of Canvas).", year: 2017, techs:["HTML5","JavaScript","NodeJS"]}}
                />
                <ProjectCard name="project-iv" thumbnail="project_project-iv.png"
                    back={{title: "Project-IV", description: "Project-IV is a mistery first person adventure where the player will have to complete a list of tasks that will mix game elements and real live elements. The main concept, is that the game uses technologies like web platforms, mail servers, geo-localitzation, etc.. to solve these puzzles. This game was developed by a team of 4 people, as a result of a degree final project (non-published).", year: 2017, techs:["UnrealEngine","CPlusPlus","NodeJS"]}}
                />
                <ProjectCard name="hoogs" thumbnail="project_hoogs.png" 
                    back={{title: "Hoogs", description: "Hoogs is a pet simulator for mobile devices. Hoogs are a lovely creatures and very inteligents. The main objective of the player is to take care of them by feeding, educating and playing with them. During the game, the player will have multiple Hoogs. \nThis project was developed by a team of four, but it was canceled before publish it.", year: 2015, techs:["CoronaSDK","Lua"]}}
                />
            </div>
        </div>
    );
}