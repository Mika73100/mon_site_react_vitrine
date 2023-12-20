import React, { useEffect } from 'react';

const Mouse = () => {

    useEffect(() => {
        const cursor = document.querySelector(".cursor");

        //au mousemove je lui demande de recupérer l'évènement (e)
        window.addEventListener('mousemove', (e) => {
            cursor.style.top = e.y + "px";
            cursor.style.left = e.x + "px";
        });

        //je demande au queryselectorall d'aller chercher tous les élement avec la class hover et donc les link
        document.querySelectorAll(".hover").forEach((link) => {
            link.addEventListener("mouseover", () => {
                cursor.classList.add("hovered");
            });

            //ici je demande au cursor de revenir a son état normal apres etre aller sur un hover.
            link.addEventListener("mouseleave", () => {
                cursor.style.transition = ".3s ease-out";
                cursor.classList.remove("hovered");
            })
        })
    }, [])
    return <span className='cursor'></span>;
};

export default Mouse;