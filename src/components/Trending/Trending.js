import React from "react";
import "./Trending.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Trending = () => {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  // Urls For Fetching Data
  const trendingUri =
    "https://api.themoviedb.org/3/trending/movie/week?api_key=dbbabc4ba854dfe84597e635c79468d7";
  const imgUri = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    // API Call : GET Data
    fetch(trendingUri)
      .then((res) => res.json())
      .then(
        (result) => {
          //   console.log(result);
          setItems(result.results);
          //   console.log(items);
        },
        (error) => {
          console.log(error);
        }
      );

    let cardContainer = document.querySelectorAll(".card-container")[0];
    let preBtn = document.querySelectorAll(".pre-btn")[0];
    let nxtBtn = document.querySelectorAll(".nxt-btn")[0];
    let containerDimensions = cardContainer.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn.addEventListener("click", () => {
      cardContainer.scrollLeft += containerWidth - 200;
    });

    preBtn.addEventListener("click", () => {
      cardContainer.scrollLeft -= containerWidth + 200;
    });
  }, []);

  return (
    <div>
      <h1 className="title">Latest & Trending</h1>

      <div className="movies-list">
        <button className="pre-btn" title="btn">
          <img src="/images/pre.png" alt="" />
        </button>
        <button className="nxt-btn" title="btn">
          <img src="/images/nxt.png" alt="" />
        </button>
        <div className="card-container">
          {items.map((item) => (
            <div
              className="card"
              key={item.id}
              onClick={(navigateTo) => {
                navigate(`/movie/${item.id}`);
              }}
            >
              <img
                src={imgUri + item.poster_path}
                className="card-img"
                alt=""
              />
              <div className="card-body">
                <h2 className="name">{item.title}</h2>
                <h6 className="des">{item.overview.slice(0, 40)}...</h6>
                <button className="watchlist-btn">+ Watchlist</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trending;
