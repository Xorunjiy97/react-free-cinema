import React,{useState,useEffect} from 'react';
import * as api from '../../REST';
import RaitingCard from './components/RaitnigCard';

const Raiting = (props) => {
    const {
        saveCardsData,
        saveCard,
    } = props;

    // saveCardsData(api.getRate()).
    // console.log(api.getRate().films)

    const [movies, setMovies] = useState([]);
    console.log(props)
    useEffect(async () => { //
        const films = api.getRate(); //componentDidMount - когда срендерился(отрисовался) компонент
        setMovies(await films);

        return () => { //componentWillUnmount - когда кмопонент удалился из вёрстки
            setMovies([]);
        };
    }, []);   
    
    console.log(movies)
    return(
        <div>
                {
                movies.length ?
                movies.map((movie, index) =>
                    <RaitingCard
                            key={index}
                            id={movie.filmId}
                            names={movie.nameEn}
                            years={movie.year}
                            images={movie.posterUrl}
                            ratings={movie.rating}
                            
                        />
                    )
                : null
            }
                  

        </div>
    )

}

export default Raiting;