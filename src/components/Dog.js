import React from "react";

const Dog = ({ nameData, foodData }) => {
  return (
    // we need this to be in a list or a parent with descendants like div h1 section tag ect
    <li>
      <h3>Name: {nameData}</h3>
      <p>Favorite Food: {foodData}</p>
      <button>add food</button>
    </li>
  );
};

export default Dog;
