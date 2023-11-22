import horoscopesObj from "../data/horoscopes";
import { useContext } from "react";
import { HoroscopeContext } from "../context/HoroscopeContext";

const Navbar = () => {
  const horoscopes = Object.keys(horoscopesObj);
  let { setCurrentSign } = useContext(HoroscopeContext);
  return (
    <nav>
      {console.log("I ovo se renderira")}
      {horoscopes.map((sign) => (
        <span onClick={() => setCurrentSign(sign)} key={sign}>
          {sign}
        </span>
      ))}
    </nav>
  );
};

export default Navbar;
