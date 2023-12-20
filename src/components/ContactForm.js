import React, { useRef } from 'react';
import emailjs from "@emailjs/browser";
import {init} from "@emailjs/browser";
init(process.env.ID);



const ContactForm = () => {
    //ici useRef fonctionne comme le POST en php il recupère toute les données dans les inputes.
    const form = useRef();

    const sendEmail = (e) => {
        //ici j'utilise e.preventDefault qui signifie ne change pas de page web quand tu valide le formulaire.
        e.preventDefault();
        //ici je crée une variable pour l'utiliser en message de validation de formulaire ou d'erreur.
        const formMess = document.querySelector(".form-Message");

        emailjs.sendForm('service_wbk0myt', 'template_nrn20g2', form.current,process.env.REACT_APP_ID)
            .then((result) => {
                console.log(result.text);
                form.current.reset();
                formMess.innerHTML = "<p className='success'>Message envoyé !<p>";
                //ici je met un settimeout qui permet de faire disparaitre le message.
                setTimeout(() => {
                    formMess.innerHTML = "";
                }, 2500)
            }, (error) => {
                console.log(error.text);
                formMess.innerHTML = "<p className='error'>Une erreur s'est produite, veuillez réessayer !</p>";

                //ici je met un settimeout qui permet de faire disparaitre le message.
                setTimeout(() => {
                formMess.innerHTML = "";
                }, 2500)
            });
    };

    return (
        <div className='form-container'>
            <h2>Contactez-moi</h2>
            <form ref={form} onSubmit={sendEmail} className="form-content">
                <label>Nom</label>
                <input type="text" name="name" required autoComplete='off' id="name"/>
                <label>Email</label>
                <input type="email" name="email" required autoComplete='off' id="email" />
                <label>Message</label>
                <textarea name="message" id="mess" required autoComplete='off'/>
                <input type="submit" value="Envoyer" className='hover button'/>
            </form>
            <div className='form-Message'></div>
        </div>
    );
};


export default ContactForm;