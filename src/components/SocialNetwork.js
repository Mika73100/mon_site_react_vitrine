import React from 'react';

const SocialNetwork = () => {
const anim = () => {
    const icons = document.querySelectorAll(".social-network a");

    //ici je demande au mouseover de utiliser sur les balise link ( des reseaux sociaux ) une petite annimation css: translate lors du passage de la souri.
    icons.forEach((link) => {
        link.addEventListener("mouseover", (e) => {
            link.style.transform = `translate(${e.offsetX - 20}px, ${e.offsetY - 13}px)`;
        });
        //ici je met le code pour que les éléments du translate retourne a leurs place initiale.
        link.addEventListener('mouseleave', () => {
            link.style.transform = "";
        });
    });
};

    return (
        //ici je rajoute target pour ouvrir la page dans une nouvelle page
        <div className='social-network'>
            <ul className='content'>


                <a href='https://github.com/Mika73100' target="_blank" rel='noopener noreferrer' className='hover'
                //quand la sourie me survole alors utilise la fonction annim
                onMouseOver={anim}>
                    <li>
                        <i className='fab fa-github'></i>
                    </li>
                </a>


                <a href='https://www.behance.net/michaelbarreca' target="_blank" rel='noopener noreferrer' className='hover'>
                    <li>
                        <i className='fab fa-behance'></i>
                    </li>
                </a>


                <a href='https://www.linkedin.com/in/michael-barreca' target="_blank" rel='noopener noreferrer' className='hover'>
                    <li>
                        <i className='fab fa-linkedin'></i>
                    </li>
                </a>


            </ul>
        </div>
    );
};

export default SocialNetwork;