import { Geist, Geist_Mono, Inter } from "next/font/google";
import React from 'react';
import { Helmet } from 'react-helmet';

import Navbar from "@/components/Navbar";
import ProjectInfo from "@/components/ProjectInfo"
import VideoFrame from "@/components/VideoFrame";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter-sans",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const TITLE = 'Secret Identity - Games by Carter';

export default function SecretIdentity() {
  return (
    <>
    <Helmet>
      <title>{ TITLE }</title>
    </Helmet>
      <Navbar />
	  <div>
		<h1 style={{justifySelf: "center", fontSize: "xx-large"}}>Secret Identity (Personal - UE5)</h1>
		<div className="article-content">
			<ProjectInfo
				team="Solo"
				type="Third-Person Action Game (Personal)"
				timeline="April - June 2024 (3 months)"
				tech="Unreal Engine 5 / C++ / Git"
			/>

			<p>While I have kept up with Unreal Engine developments over the years and occasionally toyed with it here and there, it had been a while since I’ve properly sat down and tried to really make a game with it, so I figured it was high time to give it another go.</p>
			<br/>

			<p><i>Secret Identity</i> is an idea I’ve had floating around in my head for as long as I can remember. The core concept – you choose what kind of superhero you want to be. Choose what superpowers you have, but also in the behavioral sense; Are you a true hero who avoids violence at all costs? A ruthless vigilante who shows no mercy? Somewhere in between? The choice is yours, but there will be consequences.</p>
			<br/>

			<p>Ultimately, my dreams for what this game could be are far too ambitious for a solo developer (and, frankly, probably too ambitious for most AAA development teams as well). However, I scaled back the scope of the idea to focus on just one type of hero. My choice: the “leaps tall buildings in a single bound” variety.</p>

			<VideoFrame url="https://www.youtube.com/embed/fA_DbvjVScg"/>

			<p>The core gameplay loop I settled on is very arcade-style. As time goes on, more and more thugs spawn. Your goal is simply to hold off the tide for as long as you can. I had big dreams for where to take the concept from here; more crisis types (e.g. burning building, more specific crimes, alien scout attack, giant robot attack, full-on alien invasion, etc).</p>
			<br/>

			<p>I’m very happy with what I was able to accomplish in just 3 months, but ultimately my workflow was overcome by Unreal’s hefty performance requirements, so I decided to focus on other aspects of my portfolio instead.</p>

			<VideoFrame url="https://www.youtube.com/embed/UEEs09j7IGI"/>
			<VideoFrame url="https://www.youtube.com/embed/S9ytZjzb91A"/>
			<VideoFrame url="https://www.youtube.com/embed/iVo5WVAaH1w"/>
		</div>
	  </div>
    </>
  );
}
