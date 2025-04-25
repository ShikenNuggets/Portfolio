import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import ProjectEntry from "./ProjectEntry";

const responsive = {
	desktop: {
	  breakpoint: { max: 3000, min: 1024 },
	  items: 2,
	},
	mobile: {
	  breakpoint: { max: 464, min: 0 },
	  items: 1,
	}
};

export default function HeroCarousel(){
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
		removeArrowOnDeviceType={["desktop"]}
		containerClass="carousel-container"
		dotListClass="custom-dot-list-style"
		itemClass="carousel-item-padding-40-px"
		>
        <div><ProjectEntry title='Clay Software Corporation' type='Clay Software Corporation' tech='UE5 / C++' years='2024 - Present' shortName='clay' priority={true} /></div>
        <div><ProjectEntry title='Disney Magic Kingdoms' type='Gameloft Toronto' tech='C++' years='2019 - 2024' shortName='dmk' /></div>
      </Carousel>
	  </div>
    </>
  );
}
