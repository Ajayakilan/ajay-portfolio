import React, {useContext, useState} from "react";
import "./MyProjects.scss";
import {myProjects} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function MyProjects() {
  const {isDark} = useContext(StyleContext);
  const [selected, setSelected] = useState(null);

  if (!myProjects.display) return null;

  return (
    <div className={isDark ? "dark-mode main" : "main"} id="projects">
      <div className="my-projects-header">
        <h1 className={isDark ? "dark-mode my-projects-title" : "my-projects-title"}>
          {myProjects.title}
        </h1>
        <p className={isDark ? "dark-mode subTitle my-projects-subtitle" : "subTitle my-projects-subtitle"}>
          {myProjects.subtitle}
        </p>
      </div>
      <div className="my-projects-grid">
        {myProjects.projects.map((project, i) => (
          <div className="parent" key={i}>
            <div className="card">
              <div className="content-box">
                <span className="card-title">{project.title}</span>
                <p className="card-content">{project.description}</p>
                <span
                  className="see-more"
                  onClick={() => setSelected(project)}
                >
                  See More
                </span>
              </div>
              <div className="date-box">
                <span className="month">{project.category}</span>
                <span className="date">{project.label}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selected && (
        <div className="project-modal-overlay" onClick={() => setSelected(null)}>
          <div className="project-modal-card" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelected(null)}>✕</button>
            <div className="modal-date-box">
              <span className="month">{selected.category}</span>
              <span className="date">{selected.label}</span>
            </div>
            <h2 className="modal-title">{selected.title}</h2>
            {selected.details ? (
              <div className="modal-details">
                <p className="modal-desc">{selected.details.description}</p>
                {selected.details.fullDescription && (
                  <>
                    <p className="modal-detail-label">Full Project Description</p>
                    <p className="modal-desc">{selected.details.fullDescription}</p>
                  </>
                )}
                {selected.details.role && (
                  <>
                    <p className="modal-detail-label">My Role:</p>
                    <p className="modal-desc">{selected.details.role}</p>
                  </>
                )}
                <p className="modal-detail-label">Technologies Used:</p>
                <p className="modal-desc">{selected.details.technologies}</p>
                {selected.details.features && (
                  <>
                    <p className="modal-detail-label">Key Features:</p>
                    <p className="modal-desc">{selected.details.features}</p>
                  </>
                )}
              </div>
            ) : (
              <p className="modal-desc">{selected.description}</p>
            )}
            {selected.link && (
              <a
                href={selected.link}
                target="_blank"
                rel="noreferrer"
                className="modal-link"
              >
                Visit Project →
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
