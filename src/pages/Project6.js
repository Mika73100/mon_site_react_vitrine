import React from 'react';
import Mouse from '../components/Mouse'
import Navigation from '../components/Navigation'
import Logo from '../components/Logo'
import Buttons from '../components/Buttons'
import Project from '../components/Project';

const Project6 = () => {
    return (
        <main>
            <Mouse />
                <div className="project">
                    <Navigation />
                    <Logo />
                    <Project projectNumber={5} />
                    <Buttons left={"/projet-5"} right={"/contact"} />
                </div>
        </main>
    );
};

export default Project6;