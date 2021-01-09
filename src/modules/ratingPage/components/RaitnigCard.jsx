import React from "react";


const RaitingCard = props => {
    
    const handleRemove = () => {
      
       
    }
    
    
    
   

    return(
              <div className="movie">
                <div className='movie__card'>
                  <p className="film__name">{props.names}</p>
                  <p className="film__rating">{props.ratings}</p>
                  <button className='remove__btn'
                          onClick={handleRemove}>
                              X</button>
                  <img className="card__image" src={props.images}/>
                  <p className="film__year">{props.years}</p>
                </div>
              </div>
    )
          
    
}

export default RaitingCard
