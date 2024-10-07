import React from "react";
import "./Home.css";
import Slider from "../Slider/Slider";
import Popular from "../Populars/Populars";
import Recommended from "../Recommendation/Recommendation";
import Trending from "../Trendings/Trendings";
import VideoCard from "../VideoCard/VideoCard";

const Home = () => {
  return (
    <div>
      <Slider />
      <VideoCard />
      <Trending />
      <Popular />
      <Recommended />
    </div>
  );
};

export default Home;
