import { AiFillCloseCircle } from "react-icons/ai";
import "../sass/Favorites.scss";
const Favorites = ({ fav, handleFavorite }) => {
  return (
    <section className="container__close">
      <AiFillCloseCircle className="container__close--ico" />
      <img
        className="favorites__image"
        src={fav.image}
        alt="Img Favorites"
        onClick={() => handleFavorite(fav)}
      />
    </section>
  );
};

export default Favorites;
