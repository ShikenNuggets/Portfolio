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
	priority?: boolean;
}

function ProjectEntry({ title, type, tech, years, shortName, priority = false }: ProjectProps){
	const articleLink = 'projects/' + shortName;
	const imageName = '/' + shortName + '.png';

	return(
		<div className='project-container'>
			<Link href={articleLink}>
				<Image src={imageName} width={1200} height={800} alt={title} priority={priority} />
				<div className='project-text'>
					<h2>{type}</h2>
					<h2>{tech}</h2>
					<h2>{years}</h2>
				</div>
			</Link>
		</div>
	);
}

export default ProjectEntry
