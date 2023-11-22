import { useState, useContext } from "react";
import { HoroscopeContext } from "../context/HoroscopeContext";

const Match = () => {
  const [match, setMatch] = useState(false);
  const { sign } = useContext(HoroscopeContext);
  return (
    <>
      <button onClick={() => setMatch(match === false ? true : false)}>
        Najbolji spoj
        {console.log(sign)}
      </button>
      {match && <div>{sign.match}</div>}
    </>
  );
};

export default Match;
