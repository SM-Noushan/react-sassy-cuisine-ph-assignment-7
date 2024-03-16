import Recipes from "./recipes/Recipes";
import Sidebar from "./recipebar/Sidebar";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Index = () => {
    const [wantToCook, setWantToCook] = useState([]);
    const [preparingFood, setPreparingFood] = useState([]);
    const handleWantToCook = recipe => {
        const duplicate = wantToCook.find(item => item.id === recipe.id);
        if (duplicate) {
            return toast.warning('Recipe already added!');
        }
        const updatedWantToCook = [...wantToCook, recipe];
        setWantToCook(updatedWantToCook);
        return toast.success('Recipe added!');
    };
    const handlePreparingFood = id => {
        const duplicate = preparingFood.find(item => item.id === id);
        if (duplicate) {
            return toast.warning('Already Cooking!');
        }
        const newRecipe = wantToCook.find(item => item.id === id);
        const filterWantToCook = wantToCook.filter(item => item.id !== id);
        setWantToCook(filterWantToCook);
        setPreparingFood([...preparingFood, newRecipe]);
        return toast.success('Successfully moved to cooking section!');
    }
    return (
        <div className="my-20">
            <ToastContainer stacked closeOnClick draggable />
            <div className="text-center md:w-2/3 mx-auto">
                <h1 className="text-2xl md:text-3xl lg:text-5xl font-semibold my-6">Our Recipes</h1>
                <p className="leading-6 opacity-60">At Sassy Cuisine, we believe in the power of flavor. Our recipes are carefully curated, blending unique ingredients and techniques to create dishes that delight the senses and bring joy to your dining experience.</p>
            </div>
            <div className="grid md:grid-cols-12 gap-6 mt-12">
                <div className="md:col-span-7">
                    <Recipes handleWantToCook={handleWantToCook} />
                </div>
                <div className="md:col-span-5">
                    <Sidebar wantToCook={wantToCook} preparingFood={preparingFood} handlePreparingFood={handlePreparingFood} />
                </div>
            </div>
        </div>
    );
};

export default Index;