import React from 'react';
import { NavLink } from 'react-router-dom';

//sur cette page j'utilise les fleches directionnel sur les cotés de la page web.

//les fleches sont indiquer par des span et elle sont appeler dans toute les pages grace au props qui ne justifie pas sur QUELLE page les utiliser mais par défaut les affichent partout.

//Je reprend donc Navlink pour le syncorniser a ma nav et je reprend props dans home qui va me permettre de jouer cette effet dans les pages ou je souhaite utiliser ce boutton.

//je pense bien a importer react router dom qui est la navigation de mes pages.

const Buttons = (props) => {
    return (
        <div className='scroll-bottom'>
        {props.left && (
            <NavLink to={props.left} className="left hover">
                <span>&#10092;</span>
            </NavLink>
            )}

            {props.right && (
            <NavLink to={props.right} className="right hover">
                <span>&#10093;</span>
            </NavLink>
            )}
        </div>
    );
};

export default Buttons;