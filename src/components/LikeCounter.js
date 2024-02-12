// src/components/LikeCounter.js
import { useState } from "react";

export default function LikeCounter(props) {
  // The useState for numlikes has been uplifted to CharacterList
  // const initial_numLikes = 0;
  // const [numLikes, set_numLikes] = useState(initial_numLikes); // <- using state!
  //^ 'numLikes' is the state variable and 'set_numLIkes' is the setter function

  //The two functions below have been uplifted to CharacterList
  // const increment = () => {
  //   set_numLikes(numLikes + 1);
  //   console.log("Yes, clicked! Number of likes BEFORE click:", numLikes);
  //   //even though this message is AFTER the increase of the counter
  // };

  // const reset = () => {
  //   set_numLikes(initial_numLikes);
  //   console.log("Yes, clicked! Number of likes BEFORE reset:", numLikes);
  //   //even though this message is AFTER the increase of the counter
  // };

  const [isFavorite, toggle] = useState(false);
  //^ 'isFavorite' is the state variable and 'toggle' is the setter function

  const toggleFavorite = () => {
    toggle(!isFavorite);
  };

  return (
    <div>
      <p>
        This character has <b>{props.likes}</b> likes!
        {/* increaseLikes() is defined as f_increment in CharacterList */}
        <button onClick={() => props.increaseLikes(props.id)}>Like</button>
        {/* <button onClick={reset}>Reset</button> */}
      </p>
      <p>
        <button onClick={toggleFavorite}>
          {/* {isFavorite ? "Your favorite. Click to unfavorize" : "Favorize"} */}
          {isFavorite ? "⭐️" : "Favorize"}
        </button>
      </p>
    </div>
  );
}
