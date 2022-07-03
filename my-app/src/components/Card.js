import React from "react";


const Card = ({id, email, name} ) => {
  
  return (
    <div className="bg-light-green br3 dib ma2 pa3 grow shadow-5 bw2 card">
      <img src={`http://robohash.org/${id}?150x150`} alt="Robot" />
      <div>
        <h1>{name}</h1>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
