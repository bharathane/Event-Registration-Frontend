import "./index.css";

const EventItem = (props) => {
  const { single } = props;
  const { id, name, eventType } = single;
  return (
    <li>
      <h1 className="registration-heading ">
        Name Of Register : <span className="usename-span">{name}</span>
      </h1>
      <p>
        {" "}
        Event Type : <span>{eventType}</span>
      </p>
      <p>
        Event Registration id : <span>{id}</span>{" "}
      </p>
    </li>
  );
};

export default EventItem;
