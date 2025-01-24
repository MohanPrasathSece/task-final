import React from "react";
import { movies } from "./movieData";
import "./App.css";

function App() {
  return (
    <div className="app">

      {/* Header Section */}
      <header className="header">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="Netflix Logo"
          className="header__logo"
        />
        <button className="header__button">Sign In</button>
      </header>

      {/* Banner Section */}
      <div
        className="banner"
        style={{
          backgroundImage: `url("https://assets.nflxext.com/ffe/siteui/vlv3/2e3f92d0-f816-4080-90b5-0892b495e1e0/20c19572-3b0b-4c92-805b-826243c67c9c/IN-en-20230703-popsignuptwoweeks-perspective_alpha_website_large.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="banner__contents">
          <h1 className="banner__title">Unlimited Movies, TV Shows & More</h1>
          <div className="banner__buttons">
            <button className="banner__button banner__play">Play</button>
            <button className="banner__button banner__myList">My List</button>
          </div>
          <p className="banner__description">
            Watch anywhere. Cancel anytime.
          </p>
        </div>
        <div className="banner--fadeBottom"></div>
      </div>

      {/* Movie Categories Section */}
      <div className="rows">
        {movies.map((category) => (
          <div key={category.id} className="row">
            <h2 className="row__title">{category.category}</h2>
            <div className="row__posters">
              {category.items.map((movie) => (
                <div key={movie.id} className="movie-card">
                  <img
                    src={movie.image}
                    alt={movie.title}
                    className="movie-card__image"
                  />
                  <p className="movie-card__title">{movie.title}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Footer Section */}
      <footer className="footer">
        <p>© 2025 Netflix Clone | All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default App;
