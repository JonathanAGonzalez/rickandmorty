import { useContext, Fragment } from "react";
import { AiFillHeart } from "react-icons/ai";
import ThemeContext from "../context/ThemeContext";

const CardCharacter = ({ characters, handleClick, favorites }) => {
  const themeContext = useContext(ThemeContext);
  const { theme } = themeContext;

  return (
    <Fragment>
      {characters.results.map((character) => (
        <article
          key={character.id}
          className={theme ? "container-card" : "container-card__dark"}
        >
          {favorites &&
            favorites.favorites.map((fav) => (
              <Fragment key={fav.id}>
                {fav.id !== character.id ? (
                  ""
                ) : (
                  <AiFillHeart
                    onClick={() => handleClick(character)}
                    className="card__heart--like"
                  />
                )}
              </Fragment>
            ))}
          <AiFillHeart
            onClick={() => handleClick(character)}
            className={theme ? "card__heart" : "card__heart--dark"}
          />
          <div className="card__header" alt="Foto Header">
            <img
              className="card__header--img"
              src={character.image}
              alt="FotoPersonaje"
            />
          </div>
          <p className="card__name">{character.name}</p>
          <p className={theme ? "card__p" : "card__p--dark"}>
            <strong className="card__strong">Status: </strong>
            <strong
              className={
                character.status === "Alive"
                  ? "character--alive"
                  : "character--dead"
              }
            >
              {character.status}
            </strong>
          </p>
          <p className={theme ? "card__p" : "card__p--dark"}>
            <strong className="card__strong">Genre: </strong>
            {character.gender}
          </p>
          <p className={theme ? "card__p" : "card__p--dark"}>
            <strong className="card__strong">Location: </strong>
            {character.location.name}
          </p>
          <p className={theme ? "card__p" : "card__p--dark"}>
            <strong className="card__strong">Specie: </strong>
            {character.species === "Alien" ? "👽" : character.species}
          </p>
        </article>
      ))}
    </Fragment>
  );
};

export default CardCharacter;
