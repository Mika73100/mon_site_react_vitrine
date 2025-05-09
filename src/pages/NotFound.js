import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='notFound'>
            <div className='notFound-content'>
                
                <NavLink to="/">
                <h2>Erreur 404</h2>
                <h3>
                Retour à l'accueil <i className='fas fa-home'></i>
                </h3>
                </NavLink>
            </div>
        </div>
    );
};

export default NotFound;