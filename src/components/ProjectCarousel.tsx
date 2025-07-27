import Link from "next/link";
import Image from 'next/image'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import ProjectEntry from "./ProjectEntry";
import { useState } from "react";
import ProjectModal from "./ProjectModal";

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

type ProjectCarouselProps = {
	markdownContents: Record<string, string>;
}

export default function ProjectCarousel({ markdownContents } : ProjectCarouselProps){
	const [modalOpen, setModalOpen] = useState(false);
	const [activeProject, setActiveProject] = useState<string | null>(null);
	const [activeTitle, setActiveProjectTitle] = useState<string | null>(null);
	
	const openModal = (title: string, shortName: string) => {
		setActiveProject(shortName);
		setActiveProjectTitle(title);
		setModalOpen(true);
	}
	
	const closeModal = () => {
		setActiveProject(null);
		setModalOpen(false);
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
        <ProjectEntry title='Weird Hamster Ball Game' type='Game Jam' tech='C++' years='2024' shortName='whbg' onClick={openModal} />
		<ProjectEntry title='Secret Identity' type='Personal Project' tech='UE5 / C++' years='2024' shortName='secret-identity' onClick={openModal} />
		<ProjectEntry title='Gadget Engine' type='Personal Game Engine' tech='C++' years='2022-2024' shortName='gadget' onClick={openModal} />
		<ProjectEntry title='Roof Toppers / PizzaBox Game Engine' type='School Project' tech='C++' years='2017-2019' shortName='roof-toppers' onClick={openModal} />
		<ProjectEntry title='Splinter Gear' type='School Project' tech='Unity / C#' years='2017-2018' shortName='splinter-gear' onClick={openModal} />
		{/* <ProjectEntry title='Java Chess' type='School Project - Chess Game' tech='Java' years='2017-2018' shortName='java-chess' onClick={openModal} /> */}
		<ProjectEntry title='Batman NES Remake' type='School Project - NES Remake' tech='Unity / C#' years='2017' shortName='batman' onClick={openModal} />
		{/* <ProjectEntry title='Peggle Clone' type='School Project - Peggle' tech='C++' years='2017' shortName='peggle' onClick={openModal} /> */}
		{/* <ProjectEntry title='JavaScript Fighter' type='School Project - Street Fighter' tech='JavaScript' years='2017' shortName='js-fighter' onClick={openModal} /> */}
		{/* <ProjectEntry title='Battleship' type='School Project - Battleship' tech='C#' years='2016' shortName='battleship' onClick={openModal} /> */}
      </Carousel>
	  </div>
	  {modalOpen && activeProject && activeTitle && (
	  	<ProjectModal shortName={activeProject} onClose={closeModal} title={activeTitle} markdownContent={markdownContents[activeProject]} />
	  )}
    </>
  );
}
