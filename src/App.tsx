import React, {ReactNode, useState} from 'react';
import cardOne from './asetss/5b6a94cc-dee5-4165-b39d-c57b3047afb01667208332587.png'
import  cardTwo from './asetss/c24ac2fb-de6c-493b-9483-b8ee1aedabfb1667208333820.png'
import  cardThree from './asetss/6b626fcf-c0eb-48d7-960d-d3a1d0b771431667208334353.png'
import  cardFour from  './asetss/eacd261f-01ce-47eb-a2ba-4f99a728086b1667208333650.png'
import './Burger/Burger'
import './App.css';
import Burger from "./Burger/Burger";

function App() {

  const ingredient = [{name: 'Meat', price: 80, meatImg: cardOne},
    {name: 'Cheese', price: 50, meatImg:  cardTwo},
    {name: 'Bacon', price: 60, meatImg:  cardThree},
    {name: 'Salad', price: 10, meatImg: cardFour}
  ]

    const ingredientTwo = [
        {name: 'Meat'},
        {name: 'Cheese'},
        {name: 'Bacon'},
        {name: 'Salad'}
    ]

    const [ingredients, setIngredients] = useState([{name: 'Meat' , count: 0},
        {name: 'Cheese' , count: 0},
        {name: 'Bacon', count: 0},
        {name: 'Salad', count: 0}
    ])

    let burgerList: React.ReactNode = null;
    let ingredientsList: React.ReactNode = null;

    const countNumber = (name: string) => {
        const newIngredient = {name: name}
        ingredientTwo.push(newIngredient)
        setIngredients(prev => prev.map(ing => {
            if(ing.name === name){
                return {
                    ...ing,
                    count: ing.count + 1
                }
            }
            return  ing
        }))
    }

     ingredientsList = ingredient.map((ing , index) => (
         <div key={index} onClick={() => countNumber(ingredients[index].name)}>
             <img src={ing.meatImg}/>
             <span>{ing.name} {ingredients[index].count} </span>
             <button>add</button>
         </div>
     ))

  burgerList = ingredientTwo.map((ing , index) => (
      <div key={index} className={ing.name}></div>
  ))

    const burgerSum = (sum: {name: string, count: number}[]) => {
      return sum[0].count +  sum[0].count  + sum[0].count + sum[0].count
  }

    burgerSum(ingredients)

  return (
      <div className="App">
          <div className='Ingredients'>{ingredientsList}</div>
          <Burger ingredients={burgerList}/>
      </div>
  );
}

export default App;
