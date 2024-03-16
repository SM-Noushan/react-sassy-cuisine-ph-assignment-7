import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import Recipe from "./Recipe";

const Recipes = ({ handleWantToCook }) => {
    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
        fetch('recipes.json')
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, []);
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {
                recipes.map(recipe => <Recipe key={recipe.recipe_id} data={recipe} handleWantToCook={handleWantToCook} />)
            }
        </div>
    );
};
Recipes.propTypes = {
    handleWantToCook: PropTypes.func.isRequired
};
export default Recipes;