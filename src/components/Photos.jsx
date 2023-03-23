import React from "react";

function Photos(props) {
  return (
    <div className="card dj" style={{width: "25rem",backgroundColor: '#101010' }}>
      <img
        className="card-img"
        style={{ width: "20rem",height: "25rem" }}
        src={props.image}
        alt={props.image}
      />
    </div>
  );
}

export default Photos;
