//imports
import "./TeamCard.css";

const TeamCard = (params) => {
    //pass in img, title, and in params.children the content
    return (
        <div className="team-card">
            <h1 className="major">{params.title}</h1>
            <p className="content">{params.children}</p>
        </div>
    );
};
export default TeamCard;
