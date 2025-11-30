import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import ProjectEntry from "./ProjectEntry";
import ProjectModal from "./ProjectModal";
import { useState, useEffect } from "react";

const responsive = {
	desktop: {
	  breakpoint: { max: 3000, min: 1024 },
	  items: 3,
	},
	mobile: {
	  breakpoint: { max: 464, min: 0 },
	  items: 1,
	}
};

const projectTitles: Record<string, string> = {
	"portfolio": "Portfolio",
	"route-tracker": "Arkham Speedrun Route Tracker",
	"speed-archive": "SpeedArchive",
	"batbot": "Batbot"
}

type MiscrProjectCarouselProps = {
	markdownContents: Record<string, string>;
}

export default function MiscProjectCarousel({ markdownContents} : MiscrProjectCarouselProps){
  const [modalOpen, setModalOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<string | null>(null);
  const [activeTitle, setActiveProjectTitle] = useState<string | null>(null);

  useEffect(() => {
	const handleHash = () => {
		const hash = window.location.hash.replace("#", "");
		if (hash && markdownContents[hash]){
			setActiveProject(hash);
			setActiveProjectTitle(projectTitles[hash]);
			setModalOpen(true);
		}else{
			setModalOpen(false);
			setActiveProject(null);
			setActiveProjectTitle(null);
		}
	};

	handleHash();
	window.addEventListener("hashchange", handleHash);
	return () => window.removeEventListener("hashchange", handleHash);
  }, [markdownContents]);

  const openModal = (title: string, shortName: string) => {
	window.location.hash = shortName;
	setActiveProject(shortName);
	setActiveProjectTitle(title);
	setModalOpen(true);
  }

  const closeModal = () => {
	history.replaceState(null, "", " ");
	setActiveProject(null);
	setActiveProjectTitle(null);
	setModalOpen(false);
  }

  return (
    <>
	<div style={{ position: "relative", zIndex: 1, margin: "1%" }}>

      <Carousel
	  	arrows={true}
		swipeable={true}
		draggable={false}
		showDots={false}
		responsive={responsive}
		ssr={true} // means to render carousel on server-side.
		infinite={false}
		autoPlay={false}
		customTransition="transform 500ms ease-in-out"
		transitionDuration={500}
		containerClass="carousel-container"
		deviceType="desktop"
		dotListClass="custom-dot-list-style"
		itemClass="carousel-item-padding-40-px"
		slidesToSlide={1}
		>
        <ProjectEntry title='Portfolio' type='Web Front-End' tech='React/TypeScript' years='2025' shortName='portfolio' onClick={openModal} />
        <ProjectEntry title='Arkham Speedrun Route Tracker' type='Desktop Application' tech='C#' years='2020 - 2025' shortName='route-tracker' onClick={openModal} />
        <ProjectEntry title='SpeedArchive' type='Console Utility' tech='C#' years='2019 - 2022' shortName='speed-archive' onClick={openModal} />
        <ProjectEntry title='Batbot' type='Discord Bot' tech='C#' years='2019 - 2022' shortName='batbot' onClick={openModal} />
      </Carousel>
	  </div>
	  {modalOpen && activeProject && activeTitle && (
	  	<ProjectModal shortName={activeProject} onClose={closeModal} title={activeTitle} markdownContent={markdownContents[activeProject]} />
	  )}
    </>
  );
}
