'use client'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

interface ProjectProps{
	title: string;
	type: string;
	tech: string;
	years: string;
	shortName: string;
	onClick?: (title: string, shortName: string) => void;
	priority?: boolean;
}

function ProjectEntry({ title, type, tech, years, shortName, onClick, priority = false }: ProjectProps){
	const imageName = '/' + shortName + '.png';

	const handleClick = (e: React.MouseEvent) => {
		e.stopPropagation();
		onClick?.(title, shortName);
	}

	return(
		<div className='project-container' onClick={handleClick}>
			<Image src={imageName} width={1200} height={800} alt={title} priority={priority} />
			<div className='project-text'>
				<h2>{type}</h2>
				<h2>{tech}</h2>
				<h2>{years}</h2>
			</div>
		</div>
	);
}

export default ProjectEntry
