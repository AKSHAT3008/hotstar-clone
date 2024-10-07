import React, { useState, useEffect } from "react";
import "./Details.css";
import { useLocation, useNavigate } from "react-router-dom";

const Details = () => {
  const [items, setItems] = useState({});
  const [moreItems, setMoreItems] = useState([]);
  const { pathname: params } = useLocation();
  const [, type, id] = params.split("/");
  const navigate = useNavigate();
  let name = "";
  let description = "";
  let imageUrl = "https://image.tmdb.org/t/p/original/";
  const moreImageUrl = "https://image.tmdb.org/t/p/original/";
  console.log(type, id);
  let uri = "";
  const moreUri =
    "https://api.themoviedb.org/3/trending/movie/day?api_key=dbbabc4ba854dfe84597e635c79468d7";

  const movieCall = (id) => {
    uri = `https://api.themoviedb.org/3/movie/${id}?api_key=dbbabc4ba854dfe84597e635c79468d7&language=en-US`;
  };

  const showCall = (id) => {
    uri = `
    https://api.themoviedb.org/3/tv/${id}?api_key=dbbabc4ba854dfe84597e635c79468d7&language=en-US`;
  };

  if (type === "movie") {
    movieCall(id);
  } else if (type === "tv") {
    showCall(id);
  }

  useEffect(() => {
    if (type === "movie" || type === "tv") {
      fetch(uri)
        .then((res) => res.json())
        .then(
          (result) => {
            // console.log(result);
            setItems(result);
            // console.log(items.name);
          },
          (error) => {
            console.log(error);
          }
        );

      fetch(moreUri)
        .then((res) => res.json())
        .then(
          (result) => {
            // console.log(result);
            setMoreItems(result.results);
            // console.log(items.name);
          },
          (error) => {
            console.log(error);
          }
        );
    }

    let cardContainer = document.querySelector(".card-container");
    let preBtn = document.querySelector(".pre-btn");
    let nxtBtn = document.querySelector(".nxt-btn");
    let containerDimensions = cardContainer.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn.addEventListener("click", () => {
      cardContainer.scrollLeft += containerWidth - 200;
    });

    preBtn.addEventListener("click", () => {
      cardContainer.scrollLeft -= containerWidth + 200;
    });
    // eslint-disable-next-line
  }, [params]);

  console.log(items);
  if (type === "movie") {
    name = items.title;
    description = items.overview;
    imageUrl += items.poster_path;
  } else if (type === "tv") {
    name = items.name;
    description = items.overview;
    imageUrl += items.poster_path;
  } else {
    name = "404: Not Found";
    description = "No Information Available";
    imageUrl =
      "https://t-3.tstatic.net/jualbeli/img/njajal/2019/8/Mengenal-Penyebab-dari--Kode-Kesalahan--Error-404-Page-Not-Found---Bagaimana-Hal-Ini-Dapat-Terjadi---master-144078968.jpg";
  }

  return (
    <div>
      <div className="carousel-container">
        <div className="carousel-inner-container">
          <div className="slider">
            <div className="slide-content">
              <h1 className="movie-title">{name}</h1>
              <p className="movie-des">{description}</p>
            </div>
            <img src={imageUrl} className="fit" alt={name} />
          </div>
        </div>
      </div>
      <div>
        <h1 className="title">More Like This</h1>

        <div className="movies-list">
          <button className="pre-btn" title="btn">
            <img src="/images/pre.png" alt="" />
          </button>
          <button className="nxt-btn" title="btn">
            <img src="/images/nxt.png" alt="" />
          </button>
          <div className="card-container">
            {moreItems.map((item) => (
              <div
                className="card"
                key={item.id}
                onClick={(navigateTo) => {
                  navigate(`/movie/${item.id}`);
                }}
              >
                <img
                  src={moreImageUrl + item.poster_path}
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
    </div>
  );
};

export default Details;
