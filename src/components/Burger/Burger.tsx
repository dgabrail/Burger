import React, { ReactNode } from 'react';
import { IngredientType } from '../../type';
import './Burger.css'
interface Props {
    ingredients: IngredientType[];
    price: number;
}

const Burger: React.FC<Props> = ({ ingredients, price }) => {
    return (
        <div className="Burger">
            <div className="BreadTop">
                <div className="Seeds1"></div>
                <div className="Seeds2"></div>
            </div>
            {ingredients.map((ingredient, index) => (
                <div key={JSON.stringify(index)} className={ingredient.ingredient}></div>
            ))}
            <div className="BreadBottom"></div>
            <div>{price}</div>
        </div>
    );
};

export default Burger;