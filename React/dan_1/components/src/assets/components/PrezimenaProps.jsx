import React from "react";
import { PropTypes } from "prop-types";

function PrezimenaProps({ first, last, age, spol }) {
  const user = {
    firstName: first,
    lastName: last,
    age: age,
    gender: spol,
  };

  return (
    <div>
      <h1>Korisnik</h1>
      <p>Ime: {user.firstName}</p>
      <p>Prezime: {user.lastName}</p>
      <p>Broj godina: {user.age}</p>
      <p>Spol: {user.gender}</p>
    </div>
  );
}

PrezimenaProps.propTypes = {
  first: PropTypes.string,
  last: PropTypes.string,
  age: PropTypes.number.isRequired,
  spol: PropTypes.oneOf(["M", "F"]),
};

export default PrezimenaProps;
