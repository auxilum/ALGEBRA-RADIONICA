import "./App.css";
import ComponentClass from "./assets/components/ComponentClass";
import GlavnaKomponenta from "./assets/components/GlavnaKomponenta";
import Logoperator from "./assets/components/Logoperator";
import PrezimenaProps from "./assets/components/PrezimenaProps";
import Varijabla from "./assets/components/Varijabla";

function App() {
  const user = "Ivan Horvat";

  return (
    <>
      <Varijabla user={user} />
      <Logoperator user={user} />
      <ComponentClass user={user} />
      <GlavnaKomponenta />
      <PrezimenaProps first={23} last="Maric" age={34} spol="M" />
    </>
  );
}

export default App;
