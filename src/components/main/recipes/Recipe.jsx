import clock_icon from '../../../assets/clock-icon.png';
import burn_icon from '../../../assets/fire-icon.png';
import PropTypes from 'prop-types';
const Recipe = ({ data }) => {
    const { recipe_image: image,
        recipe_name: name,
        short_description,
        ingredients,
        preparing_time,
        calories } = data;
    return (
        <div className="card p-6 border border-[#28282833]">
            <figure><img className="rounded-2xl" src={image} alt="recipe-img" /></figure>
            <div className="card-body p-0 mt-4">
                <h2 className="card-title">{name}</h2>
                <p className="text-[#878787] font-fira_sans lg:h-16 xl:h-auto flex-grow-0">{short_description}</p>
                <div className="flex flex-col w-full">
                    <div className="divider m-0"></div>
                </div>
                <p className="text-lg font-medium mt-2 flex-grow-0">Ingredients: {ingredients.length}</p>
                <ul className="list-disc list-inside px-4 lg:h-28 xl:h-auto">
                    {
                        ingredients.map((ingredient, idx) => <li className="font-fira_sans text-[#878787]" key={idx}>{ingredient}</li>)
                    }
                </ul>
                <div className="flex flex-col w-full">
                    <div className="divider m-0"></div>
                </div>
                <div className="flex items-center gap-6 *:flex *:items-center *:gap-1 my-2">
                    <div>
                        <img src={clock_icon} alt="clock_icon" />
                        <p>{preparing_time}</p>
                    </div>
                    <div>
                        <img src={burn_icon} alt="clock_icon" />
                        <p>{calories}</p>
                    </div>
                </div>
                <div className="card-actions">
                    <button className="btn bg-spring-green-500 hover:bg-spring-green-600 rounded-full">Want To Cook</button>
                </div>
            </div>
        </div>
    );
};
Recipe.propTypes = {
    data: PropTypes.object.isRequired
};
export default Recipe;