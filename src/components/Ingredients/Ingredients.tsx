import React, { useState } from 'react'
import { IngredientType } from '../../type'
import './Ingredients.css';
import Meat from '../../asetss/5b6a94cc-dee5-4165-b39d-c57b3047afb01667208332587.png'
import Cheese from '../../asetss/c24ac2fb-de6c-493b-9483-b8ee1aedabfb1667208333820.png'
import Bacon from '../../asetss/6b626fcf-c0eb-48d7-960d-d3a1d0b771431667208334353.png'
import Salad from '../../asetss/eacd261f-01ce-47eb-a2ba-4f99a728086b1667208333650.png'
import Ingredient from '../Ingredient/Ingredient'

interface Props {
  add: (ingredient: IngredientType) => void;
  deleteIgredient: (ingredient: IngredientType) => void;
}

const Ingredients: React.FC<Props> = ({ add, deleteIgredient }) => {

  const [ingredients, setIngredients] = useState<IngredientType[]>([
    { image: Meat, ingredient: 'Meat', numberIngredient: 0, price: 80 },
    { image: Cheese, ingredient: 'Cheese', numberIngredient: 0, price: 50 },
    { image: Bacon, ingredient: 'Bacon', numberIngredient: 0, price: 60 },
    { image: Salad, ingredient: 'Salad', numberIngredient: 0, price: 10 },
  ]);
  const newIngredient = (ingredient: IngredientType) => {
    setIngredients(prev => {
      const newPrev = [...prev];
      newPrev[newPrev.indexOf(ingredient)].numberIngredient++;
      return newPrev
    })
    add(ingredient);
  }

  const minus = (ingredient: IngredientType) => {
    setIngredients(prev => {
      const newPrev = [...prev];
      if (newPrev[newPrev.indexOf(ingredient)].numberIngredient > 0) {
        newPrev[newPrev.indexOf(ingredient)].numberIngredient--;
      }
      return newPrev
    })
    deleteIgredient(ingredient);
  }



  return (
    <div className="Ingredients">
      {ingredients.map((ingredient , index) => (
        <Ingredient key={JSON.stringify(index)} minus={minus} newIngredient={newIngredient} ingredient={ingredient} />
      ))}
    </div>
  )
}

export default Ingredients
