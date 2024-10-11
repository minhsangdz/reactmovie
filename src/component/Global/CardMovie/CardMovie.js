import React from "react";
import { Link } from "react-router-dom";

const CardMovie = (props) => {
    return (
        <Link to={`/detail/${props.id}`} className="cardmovie" >
            <div className="thumb">
                <img src={`https://image.tmdb.org/t/p/w300${props.img}`} alt="" />
            </div>
            <h3 className="mb-3 mt-2">{props.title}</h3>
            <div className="number d-flex align-items-center">
                <p className="day">{props.date}</p>
                <p className="rate">
                    <i className="fa-solid fa-star"></i>
                    {props.vote}
                </p>
            </div>
        </Link>
    );
};

export default CardMovie;
