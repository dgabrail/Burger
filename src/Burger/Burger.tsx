import React, {ReactNode} from 'react';
import './Burger.css'
interface Props {
    ingredients: ReactNode
}

const Burger:React.FC<Props> = ({ingredients}) => {
    return (
        <div className="Burger">
            <div className="BreadTop">
                <div className="Seeds1"></div>
                <div className="Seeds2"></div>
            </div>
            {ingredients}
            <div className="BreadBottom"></div>
        </div>
    );
};

export default Burger;