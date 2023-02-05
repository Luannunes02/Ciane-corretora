import React from "react";
import "./card.scss"
import { Link } from "react-router-dom";


export default function Card({ id, title, apName, cover, description }) {
    
    return (
        <div className="cardContainer text-center">
            <Link to={`/imovel/${id}`}>
                <h3 className="mt-3 pt-3">{title}</h3>
                <div className="d-flex justify-content-center">
                    <div className="imgContainer">
                        <img src={cover} alt={title} />
                    </div>
                </div>


                <h4 className="mt-3">{apName}</h4>
                <ul>
                    {description.map((item) => {
                        return (
                            <li key={item}>{item}</li>
                        )
                    })}
                </ul>

            </Link>
        </div>

    )
}