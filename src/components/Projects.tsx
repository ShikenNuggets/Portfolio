'use client'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import ProjectEntry from './ProjectEntry';

interface SectionProps{
	title: string;
}

function SectionHeader({title}: SectionProps){
	return(
		<h1 className='section-header'>{title}</h1>
	);
}

function PlaceHolder(){ return(<div className='project-container'></div>); }

const Projects = () => {
	return (
		<>
		<div>
			<div className='main-container'>
				<SectionHeader title='Recent Projects'/>
				<ProjectEntry title='Weird Hamster Ball Game' type='Game Jam' tech='C++' years='2024' shortName='whbg' />
				<ProjectEntry title='Secret Identity' type='Personal Project' tech='UE5 / C++' years='2024' shortName='secret-identity' />
				<ProjectEntry title='Disney Magic Kingdoms' type='Gameloft' tech='C++' years='2019-2024' shortName='dmk' />
				<ProjectEntry title='Gadget Engine' type='Personal Game Engine' tech='C++' years='2022-2024' shortName='gadget' />
				<ProjectEntry title='Roof Toppers / PizzaBox Game Engine' type='School Project' tech='C++' years='2017-2019' shortName='roof-toppers' />
				<ProjectEntry title='Splinter Gear' type='School Project' tech='Unity / C#' years='2017-2018' shortName='splinter-gear' />
			</div>
		</div>
		<br/>
		<div>
			<div className="main-container">
				<SectionHeader title='Other Projects'/>
				<ProjectEntry title='Java Chess' type='School Project - Chess Game' tech='Java' years='2017-2018' shortName='java-chess' />
				<ProjectEntry title='Batman NES Remake' type='School Project - NES Remake' tech='Unity / C#' years='2017' shortName='batman' />
				<ProjectEntry title='Peggle Clone' type='School Project - Peggle' tech='C++' years='2017' shortName='peggle' />
				<ProjectEntry title='JavaScript Fighter' type='School Project - Street Fighter' tech='JavaScript' years='2017' shortName='js-fighter' />
				<ProjectEntry title='Battleship' type='School Project - Battleship' tech='C#' years='2016' shortName='battleship' />
				<PlaceHolder />
			</div>
		</div>
		</>
	)
}

export default Projects