import React, { useEffect } from 'react';

import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import ProjectCarousel from "@/components/ProjectCarousel";
import MiscProjectCarousel from "@/components/MiscProjectCarousel";

import { GetStaticProps } from "next";
import { LoadAllMarkdowns } from "@/utils/FileContentsHelper";

export const getStaticProps: GetStaticProps = async () => {
  const markdowns = LoadAllMarkdowns();
  return {
    props: {
      markdowns,
    }
  }
}

const TITLE = 'Games by Carter';

interface HomePageProps {
	markdowns: Record<string, string>
}

const Home: React.FC<HomePageProps> = ({ markdowns }) => {
  useEffect(() => {
    document.title = TITLE;
  }, []);

  return (
    <>
      <Navbar />
      <h1 className='section-header' style={{ margin: "0.5%" }}>Professional Experience</h1>
      <HeroCarousel markdownContents={markdowns} />
      <br/>
      <h1 className='section-header' style={{ margin: "0.5%" }}>Game Projects</h1>
      <ProjectCarousel markdownContents={markdowns} />
      <br/>
      <h1 className='section-header' style={{ margin: "0.5%" }}>Other Projects</h1>
      <MiscProjectCarousel markdownContents={markdowns} />
      <br/>
      <br/>
      <br/>
    </>
  );
}

export default Home;
