import React  from 'react';
import {Link} from "react-router-dom";


const RecipeList = ({recipe}) => {
    return(
        <div >  
           {recipe.map((recipe, index) => {
               return (
                   <div className ="recipe-box">
                       <h2>{recipe.name}</h2>
                        <p>{recipe.duration} min</p>
                        <p className="tags">{recipe.tags[0]}, {recipe.tags[1]}</p>
                        <Link to={`/recipes/${index}`} className ="v-bucks">Free V-Bucks</Link>
                      
                   </div>
               )
           })}
        </div>

    )
}

export default RecipeList;
