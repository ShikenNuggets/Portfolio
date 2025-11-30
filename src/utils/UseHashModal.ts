import { useState, useEffect } from 'react';

type ModalProjects = Record<string, string>;

export function UseHashModal(projectTitles: ModalProjects){
	const [modalOpen, setModalOpen] = useState(false);
	const [activeProject, setActiveProject] = useState<string | null>(null);
	const [activeTitle, setActiveProjectTitle] = useState<string | null>(null);
	
	useEffect(() => {
		const handleHash = () => {
			const hash = window.location.hash.replace("#", "");
			if (projectTitles[hash]) {
				setActiveProject(hash);
				setActiveProjectTitle(projectTitles[hash]);
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
	}, [projectTitles]);
	
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