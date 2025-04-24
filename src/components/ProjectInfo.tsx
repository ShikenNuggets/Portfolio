'use client'
import React from 'react'

interface ProjectInfoProps{
	team?: string;
	type?: string;
	timeline?: string;
	role?: string;
	tech?: string;
	tech2?: string;
	reasonForEnding?: string;
}

const ProjectInfo = ({team, type, timeline, role, tech, tech2, reasonForEnding}: ProjectInfoProps) => {
	return (
		<>
			{ team && <p><b>Team: </b> {team}</p> }
			{ type && <p><b>Type: </b> {type}</p> }
			{ timeline && <p><b>Timeline: </b> {timeline}</p> }
			{ role && <p><b>Primary Role: </b> {role}</p> }
			{ tech && <p><b>Tech: </b> {tech}</p> }
			{ tech2 && <p><b>Tech (Additional): </b> {tech2}</p> }
			{ reasonForEnding && <p><b>Reason for Ending: </b> {reasonForEnding}</p> }
		</>
	)
}

export default ProjectInfo