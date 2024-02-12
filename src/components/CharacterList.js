// src/components/CharacterList.js
// Each character can be liked and favorited
// When character is liked, a counter of likes increase
// When character is favorited, a star appears. If they are unfavorited, the star disappears
// The total number of likes is at the top of the character list page

import axios from "axios";
import { useState, useEffect } from "react";
import Character from "./Character.js";

export default function CharacterList() {
  const [characters, set_characters] = useState([]);

  const fetchCharacters = async () => {
    // console.log("I'm gonna fetch the characters");

    const res = await axios.get(
      "https://my-json-server.typicode.com/TechmongersNL/fs03-react/characters?_limit=10"
    );

    const charactersWithLikes = res.data.map((c) => {
      return { ...c, likes: 0 };
    });

    console.log("Got back:", res);
    console.log("WithLikes:", charactersWithLikes);
    set_characters(charactersWithLikes);
  };

  // Put fetchCharacters in a useEffect hook with empty dependency array,
  // so fetchCharacters will only be called (and make an Axios request) the first time the page is rendered.
  //  Don't do this!:
  // fetchCharacters();
  // Instead, do this:
  useEffect(() => {
    fetchCharacters();
  }, []); //empty dependency array

  const f_increment = (charId) => {
    const updatedCharList = characters.map((c) => {
      if (c.id === charId) {
        return { ...c, likes: c.likes + 1 };
      } else {
        return c;
      }
    });
    // console.log("Function f_increment is triggered");
    set_characters(updatedCharList);
  };

  function totalLikes() {
    let total = 0;
    characters.forEach((character) => {
      total = total + character.likes;
    });
    // console.log("total score:", total);
    return total;
  }

  return (
    <div>
      <h2>Harry's friends and foes</h2>

      {/*   If characters is not null -- 'null' is the initial value of the characters state variable --
          then show Characters components, otherwise show "loading..." */}
      <h3>Total number of likes: {characters ? totalLikes() : "Loading..."}</h3>

      {characters.map((c, index) => {
        //   return name and imgUrl
        return (
          <Character
            key={c.id}
            charName={c.name}
            imgUrl={c.imgUrl}
            likes={c.likes}
            increaseLikes={f_increment}
            id={c.id}
          />
        );
      })}
    </div>
  );
}
