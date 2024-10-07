import React from "react";
import "./VideoCard.css";
import { useEffect } from "react";

const VideoCard = () => {
  useEffect(() => {
    const videoCards = [...document.querySelectorAll(".video-card")];

    videoCards.forEach((item) => {
      item.addEventListener("mouseover", () => {
        let video = item.children[1];
        // console.log(video);
        video.play();
      });

      item.addEventListener("mouseleave", () => {
        let video = item.children[1];
        video.pause();
      });
    });
  }, []);

  return (
    <div className="video-card-container">
      <div className="video-card">
        <img src="/images/disney.PNG" className="video-card-image" alt="" />
        <video
          src="/videos/disney.mp4"
          muted="muted"
          loop
          className="card-video"
        ></video>
      </div>

      <div className="video-card">
        <img src="/images/pixar.PNG" className="video-card-image" alt="" />
        <video
          src="/videos/pixar.mp4"
          muted="muted"
          loop
          className="card-video"
        ></video>
      </div>

      <div className="video-card">
        <img src="/images/geographic.PNG" className="video-card-image" alt="" />
        <video
          src="/videos/geographic.mp4"
          muted="muted"
          loop
          className="card-video"
        ></video>
      </div>

      <div className="video-card">
        <img src="/images/marvel.PNG" className="video-card-image" alt="" />
        <video
          src="/videos/marvel.mp4"
          muted="muted"
          loop
          className="card-video"
        />
      </div>

      <div className="video-card">
        <img src="/images/star-wars.PNG" className="video-card-image" alt="" />
        <video
          src="/videos/star-war.mp4"
          muted="muted"
          loop
          className="card-video"
        />
      </div>
    </div>
  );
};

export default VideoCard;
