import React from "react";
import './raitingCards.css';

const RaitingCard = props => {
    
    return(
              <div className="movie">
                <div className='movie__card'>
                  <p className="card__name">{props.names}</p>
                  <p className="card__rating">{props.ratings}</p>
                  <p className="card__year">{props.years}</p>
                  <div className="card__wrapper-image">
                        <button
                            onClick={() => props.onRemove(props.id)}
                            children='X'
                            className='card_remove-btn'
                        />
                        <img className="card__image" src={props.images}/>
                  </div>                   
                </div>
              </div>
    )         
}

export default RaitingCard;
