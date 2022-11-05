import Data from "./data";

const Elements = (props) => {
  return (
    <div className="places">
      <div className="places-cards">
        <img src={props.image}></img>
        <div className="info">
          <h1>
            {props.title}{" "}
            <span className="location">| Provincia {props.location} | </span>
            <span className="location mapa">
              ver en el mapa <img src={props.url} className="ubicacion"></img>
              {props.link}
            </span>
          </h1>
          <p>{props.description}</p>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default () => {
  const dataMap = Data.map((el, i) => {
    return (
      <div className="linea" key={i} >
        <Elements
          image={el.image}
          title={el.title}
          location={el.location}
          description={el.description}
          url="./images/map-logo.svg"
        />
      </div>
    );
  });
  return <div >{dataMap}</div>;
};
