import React, { ReactNode, useState } from 'react';
import './App.css';
import Burger from './components/Burger/Burger'
import Ingredients from './components/Ingredients/Ingredients';
import { IngredientType } from './type';

function App() {
    const [burger, setBurger] = useState<IngredientType[]>([]);
    const [price, setPrice] = useState(0);
    const add = (ingredient: IngredientType) => {
        setBurger(prev => [...prev, ingredient]);
        setPrice(prev => {
            prev = prev + ingredient.price;
            return prev;
        })
    }
    const deleteIgredient = (ingredient: IngredientType) => {
        setBurger(prev => {
            const newBurger = [...prev];
            const minus = newBurger.indexOf(ingredient)
            if (minus >= 0) {
                newBurger.splice(minus, 1);
            }
            return newBurger;
        })
        if (price > 0 && burger.indexOf(ingredient) >= 0) {
            setPrice(prev => {
                prev = prev - ingredient.price;
                return prev;
            })
        }
    }
    return (
        <div className="App">
            <Ingredients deleteIgredient={deleteIgredient} add={add} />
            <Burger price={price} ingredients={burger} />
        </div>
    );
}

export default App;
