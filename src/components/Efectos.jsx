import run from "../assets/img/run.png";
import bucle from "../assets/img/bucle.png";
import rym from "../assets/img/rym.png";
import "../sass/__animation.scss";
const Efectos = () => {
  return (
    <div>
      <img
        src={run}
        className="App__dark--runimg"
        alt="rick and morty running"
      />
      <img src={bucle} className="App__dark--bucle" alt="bucle" />
      <img src={rym} className="App__dark--personajes" alt="personajes" />
    </div>
  );
};

export default Efectos;
