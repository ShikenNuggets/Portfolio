import { Project } from '@/components/ProjectEntry';
import { useState, useEffect } from 'react';

type ModalProjects = Record<string, Project>;

export function UseHashModal(projects: ModalProjects){
	const [modalOpen, setModalOpen] = useState(false);
	const [activeProject, setActiveProject] = useState<string | null>(null);
	const [activeTitle, setActiveProjectTitle] = useState<string | null>(null);
	
	useEffect(() => {
		const handleHash = () => {
			const hash = window.location.hash.replace("#", "");
			if (projects[hash]) {
				setActiveProject(hash);
				setActiveProjectTitle(projects[hash].title);
				setModalOpen(true);
			} else {
				setModalOpen(false);
				setActiveProject(null);
				setActiveProjectTitle(null);
			}
		};
	
		handleHash();
		window.addEventListener("hashchange", handleHash);
		return () => window.removeEventListener("hashchange", handleHash);
	}, [projects]);
	
	const openModal = (title: string, shortName: string) => {
		window.location.hash = shortName;
		setActiveProject(shortName);
		setActiveProjectTitle(title);
		setModalOpen(true);
	};
		
	const closeModal = () => {
		history.replaceState(null, "", " ");
		setActiveProject(null);
		setActiveProjectTitle(null);
		setModalOpen(false);
	};

	return { modalOpen, activeProject, activeTitle, openModal, closeModal };
}