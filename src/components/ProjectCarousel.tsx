import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import ProjectEntry from "./ProjectEntry";
import ProjectModal from "./ProjectModal";
import { getProjectRecord } from "@/data/projects";

import { useHashModal } from "@/utils/UseHashModal";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const projects = getProjectRecord("game");

type ProjectCarouselProps = {
  markdownContents: Record<string, string>;
};

export default function ProjectCarousel({
  markdownContents,
}: ProjectCarouselProps) {
  const { modalOpen, activeProject, activeTitle, openModal, closeModal } =
    useHashModal(projects);

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
          slidesToSlide={1}
        >
          {Object.entries(projects).map(([shortName, project]) => (
            <div key={shortName}>
              <ProjectEntry
                project={project}
                shortName={shortName}
                onClick={openModal}
              />
            </div>
          ))}
        </Carousel>
      </div>
      {modalOpen && activeProject && activeTitle && (
        <ProjectModal
          onClose={closeModal}
          title={activeTitle}
          markdownContent={markdownContents[activeProject]}
        />
      )}
    </>
  );
}
