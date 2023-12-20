import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className='navigation'>
            <ul>
                <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}>
                    <li>accueil</li>
                </NavLink>


                <NavLink to="/presentation" className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}>
                            <li>presentation</li>
                </NavLink>


                <li className='nav-portfolio'>
                    portfolio
                    <ul className='nav-projects'>
                    
                        <NavLink to="/projet-1" className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}>
                            <li>ElectronJS</li>
                        </NavLink>


                        <NavLink to="/projet-2" className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}>
                            <li>ReactNative</li>
                        </NavLink>


                        <NavLink to="/projet-3" className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}>
                            <li>Flutter</li>
                        </NavLink>


                        <NavLink to="/projet-4" className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}>
                            <li>Symfony</li>
                        </NavLink>

                        <NavLink to="/projet-5" className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}>
                            <li>SymfonyAPI</li>
                        </NavLink>

                        <NavLink to="/projet-6" className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}>
                            <li>ReactRedux</li>
                        </NavLink>
                    </ul>
                </li>



                <NavLink to="/contact" className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}>
                    <li>contact</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;