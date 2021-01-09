import React from 'react';
import './mainPageStyles.less'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import About from '../aboutPage/AboutPage';
import Header from '../header/Header';
import Raiting from '../ratingPage'


const MainPage = () => {
    return(
        <Router>
        <>
            <Header/>        
                <Switch>
                    {/* <Route exact path='/' component={}/> */}
                    <Route  path='/about' component={About}/>
                    <Route  path='/raiting' component={Raiting}/>
                </Switch> 
        </>                
        </Router>                               

        
    )
}

export default React.memo(MainPage);