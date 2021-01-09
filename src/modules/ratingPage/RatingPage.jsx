import React,{useState,useEffect} from 'react';
import * as api from '../../REST';
import RaitingCard from './components/RaitnigCard'

const Raiting = (props) => {
    const [movies, setMovies] = useState([]);

    useEffect(async () => { //
        const films = api.getRate(); //componentDidMount - когда срендерился(отрисовался) компонент
        setMovies(await films);

        return () => { //componentWillUnmount - когда кмопонент удалился из вёрстки
            setMovies([]);
        };
    }, []);

    const {
        saveCardsData
    } = props;
    console.log(saveCardsData);
    

    return(
        <div>
                {
                
                saveCardsData.map((movie, index) =>
                    <RaitingCard
                            key={index}
                            id={movie.filmId}
                            names={movie.nameEn}
                            years={movie.year}
                            images={movie.posterUrl}
                            ratings={movie.rating}
                            
                        />
                    )
               
            }
                  

        </div>
    )

}

export default Raiting;