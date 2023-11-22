import { useContext } from "react";
import { HoroscopeContext } from "../context/HoroscopeContext";
import Match from "./Match";

const Card = () => {
  const { sign } = useContext(HoroscopeContext);

  return (
    <div className="sep-1">
      <div className="details">
        <img alt="horoscope name" src={sign.backgroundImg} />
        <h2>{sign.name}</h2>
        <h4>Element: {sign.element}</h4>
        <h4>Osobine: {sign.traits}</h4>
        <Match />
      </div>
    </div>
  );
};

export default Card;
