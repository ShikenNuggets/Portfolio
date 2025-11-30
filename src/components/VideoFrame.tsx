"use client";
import React from "react";

interface VideoProps {
  url: string;
}

const VideoFrame = ({ url }: VideoProps) => {
  return (
    <>
      <br />
      <iframe width="560" height="315" src={url}></iframe>
      <br />
    </>
  );
};

export default VideoFrame;
