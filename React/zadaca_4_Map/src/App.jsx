import { useRef, useState } from "react";
import {
  useJsApiLoader,
  GoogleMap,
  Autocomplete,
  DirectionsRenderer,
} from "@react-google-maps/api";

const center = { lat: 45.8150108, lng: 15.981919 };
const libraries = ["places"];

function App() {
  const selectPlaceRef = useRef();
  const deliveryAdressRef = useRef();
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [distance, setDistance] = useState(null);
  const [price, setPrice] = useState(null);
  const [err, setErr] = useState(false);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_API_KEY,
    libraries,
  });

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  const handleSelect = (event) => {
    const selectedOption = event.target.options[event.target.selectedIndex];
    // console.log(selectedOption);
    selectedOption.selected = true;
  };

  // console.log(selectPlaceRef.current.value);

  // console.log(deliveryAdressRef.current.value);

  // console.log(deliveryPlace);

  function clearRoute() {
    setDirectionsResponse(null);
    setDistance(null);
    setErr(false);
    deliveryAdressRef.current.value = "";
  }

  async function calculateRoute() {
    if (
      deliveryAdressRef.current.value === "" ||
      selectPlaceRef.current.value === ""
    ) {
      return;
    }
    try {
      const directionService = new google.maps.DirectionsService();
      const results = await directionService.route({
        origin: selectPlaceRef.current.value,
        destination: deliveryAdressRef.current.value,
        travelMode: google.maps.TravelMode.DRIVING,
      });
      if (directionsResponse !== null) {
        setDirectionsResponse(null);
      }
      setDirectionsResponse(results);
      const conversion = (
        results.routes[0].legs[0].distance.value / 1000
      ).toFixed(1);
      setDistance(conversion);
      setPrice(calculator(conversion));
      setErr(false);
    } catch (error) {
      console.error("Error:", error);
      setErr(true);
      setDirectionsResponse(null);
      setDistance(null);
      deliveryAdressRef.current.value = "";
    }
  }

  const calculator = (dist) => {
    if (dist < 20) {
      return 5;
    } else if (dist < 50) {
      return 15;
    } else if (dist < 100) {
      return 25;
    } else if (dist < 200) {
      return 50;
    } else if (dist < 300) {
      return 100;
    } else if (dist < 500) {
      return 300;
    } else {
      return 500;
    }
  };

  return (
    <>
      <div className="containerMain">
        <div className="containerMap">
          <GoogleMap
            center={center}
            zoom={15}
            mapContainerStyle={{ width: "100%", height: "100%" }}
          >
            {directionsResponse !== null && (
              <DirectionsRenderer directions={directionsResponse} />
            )}
          </GoogleMap>
        </div>
        <div className="searchSection">
          <h4>Izracunaj uslugu dostave</h4>
          <div className="searchBar">
            <label>
              Odaberite trgovinu:
              <select
                className="inputStyle"
                ref={selectPlaceRef}
                onChange={handleSelect}
              >
                <option value="IKEA, Sesvete, Hrvatska">IKEA</option>
                <option value="Lesnina Zagreb West, Ulica Dušana Vukotića, Zagreb, Croatia">
                  Lesnina
                </option>
                <option value="Pevex | Jankomir, Ulica Velimira Škorpika, Zagreb, Croatia">
                  Pevex Jankomir
                </option>
                <option value="Westgate City (Westgate Shopping Center), Zaprešićka, Jablanovec, Zagrebačka županija, Croatia">
                  Westgate City
                </option>
                <option value="City Center one East, Slavonska Avenija, Zagreb, Croatia">
                  City Center one East Zagreb
                </option>
              </select>
            </label>
            <Autocomplete>
              <label>
                Adresa dostave:
                <input
                  className="inputStyle"
                  placeholder="Unesi svoju adresu..."
                  type="text"
                  ref={deliveryAdressRef}
                />
              </label>
            </Autocomplete>

            <button onClick={calculateRoute}>Cijena dostave</button>
            <button onClick={clearRoute}>Reset</button>
          </div>
          {distance !== null && (
            <p>
              Udaljenost do vase lokacije je
              <strong> {distance} km</strong>. Cijena dostave iznosi
              <strong> {price} €</strong>
            </p>
          )}
          {err && (
            <p>
              Na zalost nismo u mogucnosti izvrsiti dostavu na vasu lokaciju.
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
