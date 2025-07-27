import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import ProjectEntry from "./ProjectEntry";
import ProjectModal from "./ProjectModal";
import { useState } from "react";
import { title } from "process";

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

type MiscrProjectCarouselProps = {
	projectName: string;
	markdownContents: Record<string, string>;
}

export default function MiscProjectCarousel({ projectName, markdownContents} : MiscrProjectCarouselProps){
  const [modalOpen, setModalOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<string | null>(null);
  const [activeTitle, setActiveProjectTitle] = useState<string | null>(null);

  const openModal = (title: string, shortName: string) => {
	console.log("Open Modal!");
	setActiveProject(shortName);
	setActiveProjectTitle(title);
	setModalOpen(true);
  }

  const closeModal = () => {
	console.log("Close Modal!");
	setActiveProject(null);
	setModalOpen(false);
  }
  
  if (markdownContents == null){
	console.log("markdownContents is undefined!");
  }

  return (
    <>
	<div style={{ margin: "1%" }}>

      <Carousel
	  	arrows={true}
		swipeable={false}
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
        <ProjectEntry title='Arkham Speedrun Route Tracker' type='Desktop Application' tech='C#' years='2020-2025' shortName='routetracker' onClick={openModal} />
        <ProjectEntry title='SpeedArchive' type='Console Utility' tech='C#' years='2019-2022' shortName='speedarchive' onClick={openModal} />
        <ProjectEntry title='Batbot' type='Discord Bot' tech='C#' years='2019-2022' shortName='batbot' onClick={openModal} />
      </Carousel>
	  </div>
	  {modalOpen && activeProject && activeTitle && (
	  	<ProjectModal shortName={activeProject} onClose={closeModal} title={activeTitle} markdownContent={markdownContents[activeProject]} />
	  )}
    </>
  );
}
