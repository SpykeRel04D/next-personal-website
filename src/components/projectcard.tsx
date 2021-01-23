type backStructure = {
    title: string,
    description: string,
    year: number,
    techs: string[]
}

export default function ProjectCard(props: { name: string, thumbnail: string, back: backStructure }) {

    function computeIcons() {
        let icons = [];
        for (var i = 0; i < props.back.techs.length; i++) {
            icons.push(
                <div className="techContainer">
                    <img className="icon" src={"/icons/"+props.back.techs[i]+".png"} alt={props.back.techs[i]} />
                    <div className="techName">{props.back.techs[i]}</div>
                </div>
            
            );
        }   
        return icons;     
    }

    return(
        <div className="projectCardZone">
            <div className="projectCard">
                <div className="projectCardFront">
                    <img className="thumbnail" src={"/thumbnails/"+props.thumbnail} alt={props.name} />
                </div>
                <div className="projectCardBack">
                    <h2 className="title">{props.back.title}</h2>
                    <div className="shortDescription">{props.back.description}</div>
                    <div className="year">{props.back.year}</div>
                    <div className="techIcons">{computeIcons()}</div>
                </div>
            </div>
            
        </div>
    );
}