function Header() {
  let randomString = require("random-string");
  let x = randomString({
    length: 24,
    numeric: true,
    letters: true,
    special: true,
  });

  return (
    <>
      <p>{x}</p>
      <div
        style={{ backgroundColor: "yellow", height: "20px", width: "300px" }}
      ></div>
    </>
  );
}

export default Header;
