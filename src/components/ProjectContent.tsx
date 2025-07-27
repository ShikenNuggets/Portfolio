'use client'
import React from 'react'
import MarkdownText from './MarkdownText';

interface ProjectContentProps{
	title: string;
	markdownContent: string | undefined;
}

const ProjectContent = ({title, markdownContent}: ProjectContentProps) => {
	return (
		<>
		<div>
			<h1 style={{justifySelf: "center", fontSize: "xx-large", marginBottom: "0.5%"}}>{title}</h1>
			<div className="article-content">
				<MarkdownText markdownText={markdownContent} />
			</div>
		</div>
		</>
	)
}

export default ProjectContent