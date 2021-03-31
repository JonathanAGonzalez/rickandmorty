import { useEffect, useReducer, useContext, useState } from "react";
import { favoriteReducer } from "../reducers/favoriteReducer";
import { useFetch } from "../hooks/useFetch";
import ThemeContext from "../context/ThemeContext";
import CharactersContext from "../context/CharactersContext";
import CardCharacter from "./CardCharacter";
import Loading from "./Loading";
import "../sass/Card.scss";
import "../sass/__assets.scss";
import Favorites from "./Favorites";
import logo from "../assets/img/logo.png";

const initialState = {
  favorites: [],
};

const Characters = () => {
  const charactersContext = useContext(CharactersContext);

  const { characters, setCharacters } = charactersContext;

  const themeContext = useContext(ThemeContext);

  const { theme } = themeContext;

  const [favorites, dispatch] = useReducer(favoriteReducer, initialState);

  const [nextPages, setNextPage] = useState(
    `https://rickandmortyapi.com/api/character`
  );

  const nextPage = () => {
    setNextPage(data.info.next);
  };
  const previousPage = () => {
    setNextPage(data.info.prev);
  };
  const { loading, data } = useFetch(nextPages);

  const res = !!data && data;

  const handleFavorite = (favorite) => {
    dispatch({
      type: !!isCharacterInFavorites(favorite)
        ? "REMOVE_FROM_FAVORITE"
        : "ADD_TO_FAVORITE",
      payload: favorite,
    });
  };

  const isCharacterInFavorites = (favorite) =>
    favorites.favorites.find((character) => character.id === favorite.id);

  useEffect(() => {
    function show() {
      setCharacters(res);
    }
    show();
    // eslint-disable-next-line
  }, [data]);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites.favorites));
  }, [favorites]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      let favorites = document.querySelector("#favorites");
      favorites.classList.toggle("sticky", window.scrollY > 190);
    });
  }, []);

  return !loading ? (
    characters && (
      <div className="container">
        <section className="container__favorites" id="favorites">
          <img className="favorites__logo" src={logo} alt="logo sticky" />
          {favorites.favorites.map((fav) => (
            <Favorites key={fav.id} fav={fav} handleFavorite={handleFavorite} />
          ))}
        </section>

        <div id="containerButton" className="container__button">
          {characters.info.prev !== null && (
            <button
              id="previous"
              className={theme ? "button-light" : "button-dark"}
              type="button"
              onClick={previousPage}
            >
              Atras
            </button>
          )}
          <button
            id="next"
            className={theme ? "button-light" : "button-dark"}
            type="button"
            onClick={nextPage}
          >
            Siguiente
          </button>
        </div>

        <section className="container__card">
          <CardCharacter
            favorites={favorites}
            characters={characters}
            handleClick={handleFavorite}
          />
        </section>
      </div>
    )
  ) : (
    <Loading />
  );
};

export default Characters;
