import React from "react";
import './header.css';

const Header = props =>{

    return(
        <div className='root__header'>
        
        <ul className='header__page-container'>
            <li children='Home'
                className='header__home'                                
            />
            <li children='About us'
                className='header__about'
            />
            <li children='Rating'
                className='header__rating'
            />
        </ul>
    </div>
    )
}

export default React.memo(Header);