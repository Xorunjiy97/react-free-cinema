import React from "react";
import {  Link } from 'react-router-dom';
import './header.css';

const Header = () =>{

    return(
        <div className='root__header'>
        
        <ul className='header__page-container'>
            <li>
                <Link to={'/'} 
                      className='header__home list'> Home </Link>
            </li>
            <li >
                <Link to={'/about'} 
                      className='header__about list' > About Us</Link> 
            </li>   
            <li> 
                <Link to={'/raiting'} 
                      className='header__rating list' > Raiting </Link> 
            </li>
        </ul>
    </div>
    )
}

export default React.memo(Header);