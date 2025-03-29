'use client'
import Image from 'next/image'
import React from 'react'

interface ProjectProps{
	title: string;
	type: string;
	tech: string;
	years: string;
	imgSrc: string;
}

function ProjectEntry({ title, type, tech, years, imgSrc }: ProjectProps){
	return(
		<div className='project-container'>
			<Image src={imgSrc} width={600} height={400} alt={title} />
			<div className='project-text'>
				<h1>{type}</h1>
				<h1>{tech}</h1>
				<h1>{years}</h1>
			</div>
		</div>
	);
}

function PlaceHolder(){ return(<div className='project-container'></div>); }

const Projects = () => {
	return (
		<>
		<div>
			<div className='main-container'>
				<h1 className='section-header'>Recent Projects</h1>
				<ProjectEntry title='Weird Hamster Ball Game' type='Game Jam' tech='C++' years='2024' imgSrc='/whbg.png' />
				<ProjectEntry title='Secret Identity' type='Personal Project' tech='UE5 / C++' years='2024' imgSrc='/secret-identity.png' />
				<ProjectEntry title='Disney Magic Kingdoms' type='Gameloft' tech='C++' years='2019-2024' imgSrc='/dmk.png' />
				<ProjectEntry title='Gadget Engine' type='Personal Game Engine' tech='C++' years='2022-2024' imgSrc='/gadget.png' />
				<ProjectEntry title='Roof Toppers / PizzaBox Game Engine' type='School Project' tech='C++' years='2017-2019' imgSrc='/roof-toppers.png' />
				<ProjectEntry title='Splinter Gear' type='School Project' tech='Unity / C#' years='2017-2018' imgSrc='/splintergear.png' />
			</div>
		</div>
		<br/>
		<div>
			<div className="main-container">
				<h1 className='section-header'>Other Projects</h1>
				<ProjectEntry title='Java Chess' type='School Project - Chess Game' tech='Java' years='2017-2018' imgSrc='/javachess.png' />
				<ProjectEntry title='Batman NES Remake' type='School Project - NES Remake' tech='Unity / C#' years='2017' imgSrc='/batman.png' />
				<ProjectEntry title='Peggle Clone' type='School Project - Peggle' tech='C++' years='2017' imgSrc='/peggle.png' />
				<ProjectEntry title='JavaScript Fighter' type='School Project - Street Fighter' tech='JavaScript' years='2017' imgSrc='/jsfighter.png' />
				<ProjectEntry title='Battleship' type='School Project - Battleship' tech='C#' years='2016' imgSrc='/battleship.png' />
				<PlaceHolder />
			</div>
		</div>
		</>
	)
}

export default Projects