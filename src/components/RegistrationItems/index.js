import { useEffect, useState } from "react";
import EventItem from "../EventItem";
import { Link } from "react-router-dom";
import "./index.css";

const RegistrationItems = () => {
  const [showUlElement, setIsShowUlElement] = useState(false);
  const [eventsList, setEventsList] = useState([]);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      const url = "https://event-registra-backend.onrender.com/getEvents";
      const response = await fetch(url);
      const jsonResponse = await response.json();

      setEventsList(jsonResponse.eventsData);
    };
    fetchDataFromApi();
  }, []);

  const togleUlDisplay = () => {
    setIsShowUlElement(!showUlElement);
  };
  

  return (
    <div className="registration-items-container">
      <h1>Your Registrastions</h1>
      <div>
        {eventsList.slice(-1).map((each) => (
          <EventItem single={each} key={each.id} />
        ))}
        <div className="buttons-container">
          <button type="button" onClick={togleUlDisplay}>
            {showUlElement ? "Hide" : "Show All"}
          </button>
          <Link to="/">
            <button type="button">Register Now</button>
          </Link>
        </div>
      </div>
      {showUlElement && (
        <ul>
          {eventsList.slice(0, eventsList.length).map((each) => (
            <EventItem single={each} key={each.id} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default RegistrationItems;
