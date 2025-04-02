'use client'
import React from 'react'
import Link from 'next/link'

interface VideoProps{
	url: string;
}

const VideoFrame = ({url}: VideoProps) => {
	return (
		<>
			<br/>
			<iframe width="420" height="315" src={url}></iframe>
			<br/><br/>
		</>
	)
}

export default VideoFrame