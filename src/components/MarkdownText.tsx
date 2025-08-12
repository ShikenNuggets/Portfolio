import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';

const YouTubeEmbed = (url: string) => {
	const videoIdMatch = url.match(/[?&]v=([a-zA-Z0-9_-]+)/);

	if(videoIdMatch){
		const videoId = videoIdMatch[1] || videoIdMatch[2];
		const videoURL = 'https://www.youtube.com/embed/' + videoId;

		return (
			<figure className='responsive-video'>
				<iframe src={videoURL} />
			</figure>
			
		);
	}
	
	return null;
};

const MarkdownText: React.FC<{ markdownText: string | undefined}> = ({ markdownText }) => {
	return (
		<div className="markdown-container">
		  <ReactMarkdown
			remarkPlugins={[remarkGfm, remarkBreaks]}
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

			  // Custom renderer for paragraphs
			  p: ({ node, children }) => {
				const child = node?.children?.[0];

				// Ensure the child exists and is an anchor element
				if (child && child.type === 'element' && child.tagName === 'a') {
					const hrefRaw = child.properties?.href;

					// Ensure href is a string
					if (typeof hrefRaw === 'string' && hrefRaw.includes('youtube.com/watch')) {
						return <>{YouTubeEmbed(hrefRaw)}</>; // No <p> wrapper
					}
				}

				// Normal paragraph
				return <p>{children}</p>;
			  }
			}}
		  >
			{markdownText}
		  </ReactMarkdown>
		</div>
	  );
};

export default MarkdownText;
