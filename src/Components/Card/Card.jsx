import React, { useState } from "react";
import Button from "../Button";
import "./Card.css";

function Card({food,onAdd,onRemove}) {
    const [count, setCount] = useState(0);
    const { title, Image, price, id } = food;
    const handleIncrement = () => {
        setCount(count + 1)
        onAdd(food);
    }
    const handleDecrement = () => {
        setCount(count - 1)
        onRemove(food);
    }
    return (
        <div className="card">
            <span className={`${count !== 0 ? "card_badge" : "card_badge--hidden"}`}>
                {count}
            </span>

            <div className="img__container">
                <img src={Image} alt={title} />
            </div>

            <h3 className="card__title">
                {title} . <span className="card__price">${ price }</span>
            </h3>

            <div className="btn-container">
                <Button title={'+'} type={'add'} onClick={handleIncrement} />
                {count !== 0 ? (
                    <Button title={'-'} type={'remove'} onClick={handleDecrement}/>
                ):("")}
            </div>
        </div>
    )
}

export default Card