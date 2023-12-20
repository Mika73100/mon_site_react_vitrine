import React, { useEffect } from 'react';

const DynamicText = () => {
    useEffect(() => {
        const target = document.getElementById("text-target");

        let array = ["infographie", "web", "mobile", "logo"];
        let wordIndex = 0;
        let letterIndex = 0;

        const createLetter = () => {
            const letter = document.createElement("span");
            target.appendChild(letter);

            //ici graçe a cette fonction j'appel les lettres une par une et elles disparaissent sous l'animation.
            letter.classList.add("letter");
            letter.style.opacity = "0";
            letter.style.animation ="anim 5s ease forwards";
            letter.textContent = array[wordIndex][letterIndex];

            setTimeout(() => {
                letter.remove();
            }, 2000);
        };

        const loop = () => {
            setTimeout(() => {
                //ici je demande a loop, une fois que le tableau de mots a été parcourus alors relance le.
                if (wordIndex >= array.length){
                    wordIndex = 0;
                    letterIndex = 0;
                    loop();
                } else if (letterIndex < array[wordIndex].length){
                createLetter();
                //la je demande de montrer la lettre ++ par contre utilise loop une fois a la fin du mots efface toi et passe au mots suivant.
                letterIndex++;
                loop();
                } else {
                    letterIndex = 0;
                    wordIndex++;
                    setTimeout(loop, 3000)
                }
            }, 80);
        };
        loop()
        
    }, []);

    return (
        <span className='dynamic-text'>
            <span>simply</span>
            <span id="text-target"></span>
        </span>
    );
};

export default DynamicText;