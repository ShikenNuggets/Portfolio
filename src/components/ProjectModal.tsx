import React from 'react';

interface ProjectModalProps{
	shortName: string;
	onClose: () => void;
}

const ProjectModal : React.FC<ProjectModalProps> = ({ shortName, onClose }) => {
	return (
		<>
		<div className='modal-overlay' onClick={onClose}>
			<div className='modal-content' onClick={(e) => e.stopPropagation()}>
				<h2>{shortName}</h2>
				<h2>{shortName}</h2>
				<p>This is your modal content for {shortName}.</p>
				<button onClick={onClose}>x</button>
			</div>
		</div>
		</>
	);
};

export default ProjectModal;
