import "./Slider.css";
import React from "react";

const Slider = () => {
  return (
    <div>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {movies.map((movie, index) => (
            <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={movie.id}>
              <div className="carousel-image-box">
                <img
                  src={movie.imageUrl}
                  className="w-60 movie-poster"
                  alt={movie.title}
                />
                <div className="carousel-hover-card">
                  <div className="hover-card-left">
                    <h1>{movie.title}</h1>
                    <p>{movie.description}</p>
                    <p>Rating: {movie.rating}</p>
                  </div>
                  <div className="hover-card-right">
                    <button className="play-button">Play</button>
                    <button className="resume-button">Resume</button>
                    <button className="watchlist-button">Add to Watchlist</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

const movies = [
  {
    id: 1,
    title: "Sita Ram",
    description: "A 20-year-old romance set amidst a war.",
    rating: "8.5/10",
    imageUrl:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/5681/1415681-h-d4156275b3b3",
  },
  {
    id: 2,
    title: "Anupama",
    description: "Anupama begins a new chapter after her divorce.",
    rating: "7.9/10",
    imageUrl:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4248/1364248-h-04994afb88d4",
  },
  // Add more movies here...
];

export default Slider;
