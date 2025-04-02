import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const YouTubeEmbed = (url: string) => {
	const videoIdMatch = url.match(/[?&]v=([a-zA-Z0-9_-]+)/);

	if(videoIdMatch){
		const videoId = videoIdMatch[1] || videoIdMatch[2];
		const videoURL = 'https://www.youtube.com/embed/' + videoId;

		return (
			<iframe width="560" height="315" src={videoURL} />
		);
	}
	
	return null;
};

const MarkdownText: React.FC<{ markdownText: string}> = ({ markdownText }) => {
	return (
		<div className="markdown-container">
		  <ReactMarkdown
			remarkPlugins={[remarkGfm]}
			components={{
			  // Custom renderers for links
			  a: ({ node, ...props }) => {
				const { href } = props;
				// Check if the link is a YouTube URL
				if (href && href.includes('youtube.com/watch')) {
					return <>{YouTubeEmbed(href)}</>; // Render YouTube embed
				}else{
					return <a {...props} />; // Default link rendering
				}
				
			  },
			}}
		  >
			{markdownText}
		  </ReactMarkdown>
		</div>
	  );
};

export default MarkdownText;
