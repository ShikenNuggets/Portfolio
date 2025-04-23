import Link from "next/link";
import Image from 'next/image'
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
		removeArrowOnDeviceType={["tablet", "mobile"]}
		deviceType="desktop"
		dotListClass="custom-dot-list-style"
		itemClass="carousel-item-padding-40-px"
		slidesToSlide={1}
		>
        <ProjectEntry title='Weird Hamster Ball Game' type='Game Jam' tech='C++' years='2024' shortName='whbg' />
		<ProjectEntry title='Secret Identity' type='Personal Project' tech='UE5 / C++' years='2024' shortName='secret-identity' />
		<ProjectEntry title='Gadget Engine' type='Personal Game Engine' tech='C++' years='2022-2024' shortName='gadget' />
		<ProjectEntry title='Roof Toppers / PizzaBox Game Engine' type='School Project' tech='C++' years='2017-2019' shortName='roof-toppers' />
		<ProjectEntry title='Splinter Gear' type='School Project' tech='Unity / C#' years='2017-2018' shortName='splinter-gear' />
		<ProjectEntry title='Java Chess' type='School Project - Chess Game' tech='Java' years='2017-2018' shortName='java-chess' />
		<ProjectEntry title='Batman NES Remake' type='School Project - NES Remake' tech='Unity / C#' years='2017' shortName='batman' />
		<ProjectEntry title='Peggle Clone' type='School Project - Peggle' tech='C++' years='2017' shortName='peggle' />
		<ProjectEntry title='JavaScript Fighter' type='School Project - Street Fighter' tech='JavaScript' years='2017' shortName='js-fighter' />
		<ProjectEntry title='Battleship' type='School Project - Battleship' tech='C#' years='2016' shortName='battleship' />
      </Carousel>
	  </div>
    </>
  );
}
