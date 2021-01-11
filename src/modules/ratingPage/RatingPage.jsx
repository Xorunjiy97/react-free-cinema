import React,{useEffect,useReducer,} from 'react';
import * as api from '../../REST';
import RaitingCard from './components/RaitnigCard';
import { initialState, reducer } from "../../manager/readedManager/reducer";
import constants from '../../constants/constants';


const Raiting = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

  
    useEffect(() => {
      api.getRate().then(res =>{
        dispatch({
          type: constants.SAVE_CARDS,
          payload: res.films
        });
      });
    }, []);
    
    
    const { movies } = state;
    console.log(movies)
    
    const handleRemove = (filmId) => {
      dispatch({
        type: constants.REMOVE_CARD,
        payload: filmId
      })
      
    }
    return(
        <div>
                {
                movies.length ?
                movies.map((movie, index) =>
                    <RaitingCard
                            key={index}
                            id={movie.filmId}
                            names={movie.nameRu}
                            years={movie.year}
                            images={movie.posterUrl}
                            ratings={movie.rating} 
                            onRemove={handleRemove}                           
                    />
                    )
                : null
            }
                  

        </div>
    )

}

export default Raiting;