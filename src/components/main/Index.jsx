import Recipes from "./recipes/Recipes";
import Sidebar from "./recipebar/Sidebar";
import { useState } from "react";
const Index = () => {
    const [wantToCook, setWantToCook] = useState([]);
    const handleWantToCook = recipe => {
        const updatedWantToCook = [...wantToCook, recipe];
        setWantToCook(updatedWantToCook);
    };
    return (
        <div className="my-20">
            <div className="text-center md:w-2/3 mx-auto">
                <h1 className="text-2xl md:text-3xl lg:text-5xl font-semibold my-6">Our Recipes</h1>
                <p className="leading-6 opacity-60">At Sassy Cuisine, we believe in the power of flavor. Our recipes are carefully curated, blending unique ingredients and techniques to create dishes that delight the senses and bring joy to your dining experience.</p>
            </div>
            <div className="grid md:grid-cols-12 gap-6 mt-12">
                <div className="md:col-span-7">
                    <Recipes handleWantToCook={handleWantToCook} />
                </div>
                <div className="md:col-span-5">
                    <Sidebar wantToCook={wantToCook} />
                </div>
            </div>
        </div>
    );
};

export default Index;