//src/components/Character.js
import LikeCounter from "./LikeCounter";
import { NavLink } from "react-router-dom";
// import "../style/global.scss"; can't get the stuling working

//Each character is separate component, and should show only their name and image
// Each characters has a "see details" button that takes them to their detail page
// Uses /characters/:id API

export default function Character({
  charName,
  imgUrl,
  likes,
  increaseLikes,
  id,
}) {
  return (
    <div className="card">
      {/* //the styling does not work; don't no why */}
      <div className="card-body">
        <h3>{charName}</h3>
        <img className="image" src={imgUrl} alt={charName} />
        {/* passing further down the props that are needed in LikeCounter */}
        <LikeCounter likes={likes} increaseLikes={increaseLikes} id={id} />
        <NavLink to={`/character/${id}`}> Details for {charName}</NavLink>
        {/* {console.log("Character:", { charName })} */}
        {/* <CharacterDetail id={id} /> */}
      </div>
    </div>
  );
}
