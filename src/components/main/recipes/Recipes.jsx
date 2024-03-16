import { useEffect, useState } from "react";
import Recipe from "./Recipe";
const Recipes = () => {
    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
        fetch('recipes.json')
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, []);
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {
                recipes.map(recipe => <Recipe key={recipe.recipe_id} data={recipe} />)
            }
        </div>
    );
};

export default Recipes;