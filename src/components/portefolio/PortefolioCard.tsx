import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { IProject } from "../../types/types";
import "./portefolioSection.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  project: IProject;
}
export default function PortefolioCard({ project }: Props) {
  return (
    <a href={project.link} target="_blank">
      <div className="portefolioSection__gridCard">
        <img
          src={project.image}
          alt={project.title}
          className="portefolioSection__gridCardImg"
        />
        <div className="portefolioSection__gridCardDescription">
          <h5>{project.title}</h5>
          <p>{project.description}</p>
          <ul className="portefolioSection__gridCardList">
            {project.techno.map((tech: IconDefinition, index: number) => {
              const image =
                typeof tech === "string" ? (
                  <img src={tech} alt="techno" />
                ) : (
                  <FontAwesomeIcon icon={tech} />
                );
              return <li key={index}>{image}</li>;
            })}
          </ul>
        </div>
      </div>
    </a>
  );
}
