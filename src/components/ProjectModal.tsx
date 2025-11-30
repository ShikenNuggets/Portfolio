import React from "react";
import ProjectContent from "./ProjectContent";

interface ProjectModalProps {
  shortName: string;
  onClose: () => void;
  title: string;
  markdownContent: string | undefined;
}

const ProjectModal: React.FC<ProjectModalProps> = ({
  onClose,
  title,
  markdownContent,
}) => {
  return (
    <>
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <button
            className="modal-close-button"
            onClick={onClose}
            aria-label="Close modal"
          >
            X
          </button>
          <ProjectContent title={title} markdownContent={markdownContent} />
        </div>
      </div>
    </>
  );
};

export default ProjectModal;
