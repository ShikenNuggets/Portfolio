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
	largeImage?: boolean;
}

function ProjectEntry({ title, type, tech, years, shortName, largeImage = false }: ProjectProps){
	const articleLink = 'projects/' + shortName;
	const imageName = '/' + shortName + '.png';

	let width = 600;
	let height = 400;
	if(largeImage){
		width = 800;
		height = 600;
	}

	return(
		<div className='project-container'>
			<Link href={articleLink}>
				<Image src={imageName} width={width} height={height} alt={title} />
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
