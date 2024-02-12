//src/components/CharacterDetail.js
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// List all the details for each character (quote, birthday, etc.)
// Uses /characters/:id API

export default function CharacterDetails() {
  const [characterDetails, set_details] = useState([]);
  const route_params = useParams();
  console.log("The route params are: ", route_params);

  const fetchCharacterDetails = async () => {
    const res = await axios.get(
      `https://my-json-server.typicode.com/TechmongersNL/fs03-react/characters/${route_params.id}`
    );

    console.log("Got back details:", res);
    set_details(res.data);
  };

  useEffect(() => {
    fetchCharacterDetails();
  }, []); //empty dependency array

  //The id of the character comes in via the URL, not as a property
  return (
    <>
      <h2>Details for {characterDetails.name}</h2>
      <img
        className="image"
        src={characterDetails.imgUrl}
        alt={characterDetails.name}
      />
      <p>Blood: {characterDetails.blood}</p>
      <p>Born: {characterDetails.born}</p>
      <p>Quote: {characterDetails.quote}</p>
      <p> </p>
    </>
  );
}
