import React from "react";
import Dog from "./Dog";

export const DogList = ({ dogs }) => {
  return (
    <ul>
      <h2>Dog Count: {dogs.length}</h2>
      {dogs.map((dog) => {
        return <Dog nameData={dog.nameData} foodData={dog.foodData} />;
      })}
    </ul>
  );
};

// we can also do 'export default DogList;'
