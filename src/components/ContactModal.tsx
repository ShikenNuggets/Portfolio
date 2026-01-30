import React from "react";

interface ContactModalProps {
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ onClose }) => {
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
          <h1 style={{ paddingBottom: "10px" }}>Contact</h1>
          <p>
            <a href="mailto:carter.rennick@gmail.com">
              carter.rennick@gmail.com
            </a>
          </p>
          <p>
            <a href="https://www.linkedin.com/in/carterrennick">LinkedIn</a>
          </p>
          <p>
            <a href="https://github.com/ShikenNuggets">GitHub</a>
          </p>
          <p>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume (PDF)</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default ContactModal;
