import React from 'react';
import './mainPageStyles.less'
import { HashRouter as Router, Switch, Route} from 'react-router-dom';
import Home from '../homePage/HomePage.jsx';
import About from '../aboutPage/AboutPage';
import Header from '../header/Header';
import Raiting from '../ratingPage/RatingPage';



const MainPage = () => {
    return(
        <Router>
        <>
            <Header/>        
                <Switch>
                    <Route  exact path='/' component={Home}/> 
                    <Route  path='/about' component={About}/>
                    <Route  path='/raiting' component={Raiting}/>
                </Switch> 
        </>                
        </Router>                               

        
    )
}

export default React.memo(MainPage);