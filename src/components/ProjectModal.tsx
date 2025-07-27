import React from 'react';
import ProjectContent from './ProjectContent';

interface ProjectModalProps{
	shortName: string;
	onClose: () => void;
	title: string;
	markdownContent: string | undefined;
}

const ProjectModal : React.FC<ProjectModalProps> = ({ shortName, onClose, title, markdownContent }) => {
	return (
		<>
		<div className='modal-overlay' onClick={onClose}>
			<div className='modal-content' onClick={(e) => e.stopPropagation()}>
				<ProjectContent title={title} markdownContent={markdownContent} />
				<button onClick={onClose}>x</button>
			</div>
		</div>
		</>
	);
};

export default ProjectModal;
