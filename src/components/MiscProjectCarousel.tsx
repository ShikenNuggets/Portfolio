import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import ProjectEntry from "./ProjectEntry";

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

export default function ProjectCarousel(){
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
        <ProjectEntry title='Portfolio' type='Web Front-End' tech='React/TypeScript' years='2025' shortName='portfolio' />
        <ProjectEntry title='Arkham Speedrun Route Tracker' type='Desktop Application' tech='C#' years='2020-2025' shortName='routetracker' />
        <ProjectEntry title='SpeedArchive' type='Console Utility' tech='C#' years='2019-2022' shortName='speedarchive' />
        <ProjectEntry title='Batbot' type='Discord Bot' tech='C#' years='2019-2022' shortName='batbot' />
      </Carousel>
	  </div>
    </>
  );
}
