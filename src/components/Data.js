import React from "react";

const Data = (props) => {
  //console.log(props);
  return (
    // <div>
    //   <Card
    //     style={{ width: "20rem", textAlign: "center", display: "inline-block" }}
    //   >
    //     <Card.Img variant="top" src={props.image} />
    //     <Card.Body>
    //       <Card.Title>{props.name}</Card.Title>
    //       <Card.Title>{props.house}</Card.Title>
    //     </Card.Body>
    //   </Card>
    // </div>
    <div
      style={{ width: "20rem", textAlign: "center", display: "inline-block" }}
    >
      <img
        src={props.image}
        alt={props.name}
        height="200"
        width="200"
        style={{ borderRadius: ".60rem" }}
      />
      <div>
        <h2>{props.name}</h2>
        <h3>{props.house}</h3>
      </div>
    </div>
  );
};

export default Data;
