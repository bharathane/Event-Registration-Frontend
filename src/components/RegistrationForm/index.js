import { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";

const RegistrationForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setemail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [eventType, seteventType] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const [showPhoneError, setShowPhoneError] = useState(false);

  const onChangeNameInputValue = (e) => {
    setFullName(e.target.value);
  };

  const onChangeEmailInputVal = (e) => {
    setemail(e.target.value);
  };

  const onChangePhoneNumberValue = (e) => {
    setPhoneNumber(e.target.value);
  };

  const onChangeEventType = (e) => {
    seteventType(e.target.value);
  };

  const onSubmitFormData = async (event) => {
    event.preventDefault();
    // Phone number validation regular expression
    const phoneRegex = /^\d{10}$/;
    if (fullName === "") {
      alert("Please Enter a Name");
    } else if (!phoneRegex.test(phoneNumber)) {
      // If phone number is in wrong format
      setPhoneError("Invalid phone number. Must be 10 digits.");
      setShowPhoneError(true);
    } else if (eventType === "") {
      alert("Please Select an Event Type");
    } else {
      // If phone number is in correct format
      setShowPhoneError(false);

      const postUrl = "https://event-registra-backend.onrender.com/postEvents";

      const postBody = {
        username: fullName,
        email: email,
        phone: phoneNumber,
        eventType: eventType,
      };

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postBody),
      };
      // Send request to this server
      const resposnse = await fetch(postUrl, options);
      const jsonResponse = await resposnse.json();
      window.location.replace("/registrations");
      setFullName("");
      setPhoneNumber("");
      setemail("");
      seteventType("");
    }
  };

  return (
    <div className="registration-container">
      <form onSubmit={onSubmitFormData}>
        <div className="input-container">
          <label htmlFor="nameInput">Full Name</label>
          <br />
          <input
            type="text"
            id="nameInput"
            onChange={onChangeNameInputValue}
            value={fullName}
          />
        </div>

        <div className="input-container">
          <label htmlFor="eamilInput">Email</label>
          <br />
          <input
            type="email"
            id="eamilInput"
            onChange={onChangeEmailInputVal}
            value={email}
            required
          />
        </div>

        <div className="input-container">
          <label htmlFor="phoneNumber">Phone Number</label>
          <br />
          <input
            type="text"
            id="phoneNumber"
            onChange={onChangePhoneNumberValue}
            value={phoneNumber}
            required
          />
          {showPhoneError && <p className="phoneErrorPara">*{phoneError}</p>}
        </div>

        <div className="input-container">
          <label htmlFor="eventType">Event Type</label>
          <br />
          <select
            className="input-container"
            onChange={onChangeEventType}
            value={eventType}
          >
            <option value="">Select an option</option>
            <option value="Conference">Conference</option>
            <option value="Seminars">Seminars</option>
            <option value="Trade Shows">Trade Shows</option>
            <option value="Produc Launches">Produc Launches</option>
            <option value="Birthday Parties"> Birthday Parties</option>
            <option value="Team Building">Team Building</option>
            <option value="Recruitment">Recruitment</option>
          </select>
        </div>
        <div className="buttons-container">
          <button type="submit">Submit</button>

          <Link to="/registrations">
            <button type="button">Show all</button>
          </Link>
        </div>
      </form>
    </div>
  );
};
export default RegistrationForm;
