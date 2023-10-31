import React from 'react';
import './Ingredient.css';
import { IngredientType } from '../../type';
interface Props {
  ingredient: IngredientType;
  newIngredient: (ingredient: IngredientType) => void;
  minus: (ingredient: IngredientType) => void;
}

const Ingredient: React.FC<Props> = ({ ingredient, newIngredient, minus }) => {
  return (
    <div className="Ingredient">
      <div onClick={() => newIngredient(ingredient)}>
        <img src={ingredient.image} alt="" />
        <span>{ingredient.ingredient}</span>
        <span>{ingredient.numberIngredient}</span>
      </div>
      <button onClick={() => minus(ingredient)}>Delete</button>
    </div>
  )
}

export default Ingredient
