import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [final, setFinal] = useState([]);

  const searchUrl =
    "https://api.themoviedb.org/3/trending/movie/week?api_key=9f83f6640f8d132c4921f4f18291935c";

  const imgUri = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    fetch(searchUrl)
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
  }, []);

  // console.log(items);

  const search = (event) => {
    // const searchBox = document.querySelector(".search-box");
    // console.log(searchBox);
    const searchResults = document.querySelector(".search-results");
    // console.log(event.target.value);
    if (event.target.value === "") {
      if (!searchResults.classList.contains("hidden")) {
        searchResults.classList.add("hidden");
      }
    } else {
      if (searchResults.classList.contains("hidden"))
        searchResults.classList.remove("hidden");
      const result = [];
      items.forEach((item) => {
        if (
          item.title.toLowerCase().includes(event.target.value.toLowerCase())
        ) {
          result.push(item);
        }
        setFinal(result);
      });
    }
  };

  const searchClick = () => {
    setFinal([]);
    document.querySelector(".search-box").value = "";
  };

  return (
    <nav className="navbar">
      <div className="dropdown-box">
        <button
          className="btn btn-secondary dropdown-toggle dropdown-button"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <i className="fa-solid fa-bars menu-icon" />
        </button>
        <ul className="dropdown-menu toggle-dropdown" aria-labelledby="">
          <li className="menu-list">
            <Link to="/channel">
              <i className="fa-solid fa-tv menu-icon-inner" />
              Channel
            </Link>
          </li>
          <li className="menu-list">
            <Link to="/language">
              <i className="fa-solid fa-language menu-icon-inner" /> Language
            </Link>
          </li>
          <li className="menu-list">
            <Link to="/genres">
              <i className="fa-solid fa-shield-heart menu-icon-inner" /> Genres
            </Link>
          </li>
        </ul>
      </div>
      <img
        src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg"
        alt=""
        className="logo"
        onClick={() => {
          navigate("/");
        }}
      />
      <ul className="nav-links nav-responsive">
        <li className="nav-items nav-responsive dropdown-box">
          <button
            className="btn btn-secondary dropdown-toggle dropdown-button"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            TV
          </button>
          <ul className="dropdown-menu" aria-labelledby="">
            <li>Other Shows</li>
            <li>Hotstar Specials</li>
            <li>Star Plus</li>
            <li>Star Vijay</li>
            <li>Asianet</li>
          </ul>
        </li>
        <li className="nav-items nav-responsive dropdown-box">
          <button
            className="btn btn-secondary dropdown-toggle dropdown-button"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Movies
          </button>
          <ul className="dropdown-menu" aria-labelledby="">
            <li>Hindi</li>
            <li>Bengali</li>
            <li>Telugu</li>
            <li>Malayalam</li>
            <li>Tamil</li>
            <li>Kannada</li>
          </ul>
        </li>
        <li className="nav-items nav-responsive dropdown-box">
          <button
            className="btn btn-secondary dropdown-toggle dropdown-button"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Sports
          </button>
          <ul className="dropdown-menu" aria-labelledby="">
            <li>Other Shows</li>
            <li>Hotstar Specials</li>
            <li>Star Plus</li>
            <li>Star Vijay</li>
            <li>Asianet</li>
          </ul>
        </li>
        <li className="nav-items nav-responsive dropdown-box">
          <button
            className="btn btn-secondary dropdown-toggle dropdown-button"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Disney+
          </button>
          <ul className="dropdown-menu" aria-labelledby="">
            <li>Other Shows</li>
            <li>Hotstar Specials</li>
            <li>Star Plus</li>
            <li>Star Vijay</li>
            <li>Asianet</li>
          </ul>
        </li>
      </ul>

      <div className="right-container">
        <div className="search-field">
          <input
            type="text"
            className="search-box"
            placeholder="search"
            onChange={search}
          />
          <i className="fa-solid fa-magnifying-glass search-icon"></i>
        </div>

        <button className="sub-btn">subscribe</button>
        <a href="/" className="login-link">
          login
        </a>
        <div className="search-results hidden">
          {final.map((searchList) => (
            <div className="outerbox">
              <Link to={"/movie/" + searchList.id} onClick={searchClick}>
                <div className="search-dropdown-menu">
                  <div className="search-dropdown-img">
                    <img
                      className="searchImages"
                      src={imgUri + searchList.poster_path}
                      alt={searchList.title}
                    />
                  </div>
                  <div className="search-dropdown-title">
                    <h6>{searchList.title}</h6>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
