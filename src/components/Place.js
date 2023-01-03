export default function Place(props) {
  return (
    <>
      <div className="place-container">
        <img src={`/images/${props.place.img}`} alt={props.place.alt} />
        <div className="place--info">
          <div className="place--location">
            <p>
              <span className="fas fa-map-marker-alt"></span>
              {props.place.location}
            </p>
            <a
              href={props.place.googleMapsUrl}
              className="google--maps--url"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on Google Maps
            </a>
          </div>

          <h1 className="place--title">{props.place.title}</h1>
          <p className="place--date">
            {props.place.startDate}
            {props.place.endDate && ` - ${props.place.endDate}`}
          </p>
          <p className="place--description">{props.place.description}</p>
        </div>
      </div>
      <div className="hr">
        <hr />
      </div>
    </>
  );
}
