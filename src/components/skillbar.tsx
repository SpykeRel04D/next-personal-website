export default function SkillBar(props: { tag: string, percentage: number, label: string, type: string }) {
    return(
        <div className={`skillBar ${props.type === "language" ? "SBlanguage" : props.type === "tools" ? "SBtool" : "SBalternate"}`}>
            <div className="loadBar" style={{width: props.percentage+"%"}}>
                <div className="titleBar">
                    <span className="titleTag">{props.tag}</span>
                </div>
            </div>
            <span className="percentage">{props.label}</span>
        </div>
    );
}