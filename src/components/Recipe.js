import React from 'react';
import {Link, useParams} from "react-router-dom";


const Recipe = ({recipes}) => {
const id = useParams().id;
    console.log(recipes)
    return (
      <div>
            <h2>{recipes[id].name}</h2>
            <Link to={`/`} className="return-button">Back to gaming</Link>
            <p>{recipes[id].duration} min</p>
            <ul>
   {recipes[id].ingredients.map((ingredient, index) => {
     return <li key={ingredient}>{ingredient}</li>;
   })}
 </ul>
 
 <ul>
   {recipes[id].tags.map((tags) => {
     return <li key={tags}>{tags}</li>;
   })}
 </ul>
            <p>{recipes[id].preparation}</p>
      </div>
    )
  }



  export default Recipe;