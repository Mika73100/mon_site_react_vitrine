import React from 'react';
import Logo from '../components/Logo'
import Navigation from '../components/Navigation'
import Mouse from '../components/Mouse'
import ContactForm from '../components/ContactForm'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import SocialNetwork from '../components/SocialNetwork'
import Buttons from '../components/Buttons'
import { motion } from 'framer-motion'


const Contact = () => {
    const pageTransition = {
        in: {
            opacity: 1,
            x: 0
        },
        out: {
            opacity: 0,
            x: 300,
        },
    };

    return (
        <main>
            <Mouse />
            <motion.div initial='out' animate='in' exit='out' variants={pageTransition} transition={{duration: 0.5}} className='contact'>
                <Navigation />
                <Logo />
                <ContactForm />
                <div className='contact-infos'>
                    <div className='address'>
                        <div className="content">
                            <h4>Adresse</h4>
                            <p>1516 route de l'albanais</p>
                            <p>73100 Grésy-sur-aix</p>
                        </div>
                    </div>
                <div className='phone'>
                    <div className='content'>
                        <h4>Téléphone</h4>
                        <CopyToClipboard text='0607535627' className='hover'>
                            <p 
                            style={{cursor:'pointer'}}
                            className='clipboard' 
                            onClick={() => alert("Téléphone copié !")}
                            >
                            +33 6 07 53 56 27
                            </p>
                        </CopyToClipboard>
                    </div>
                </div>
                    <div className='email'>
                        <div className='content'>
                            <h4>Email</h4>
                            <CopyToClipboard text='Michael-73@live.fr' className='hover'>
                            <p 
                            style={{cursor:'pointer'}}
                            className='clipboard' 
                            onClick={() => alert("Email copié !")}
                            >
                            Michael-73@live.fr
                            </p>
                            </CopyToClipboard>
                            </div>
                        </div>
                        <SocialNetwork />
                        <div className='credits'>
                            <p>Michael BARRECA</p>
                        </div>
                    </div>
                    <Buttons left={"/projet-6"} />
            </motion.div>
        </main>
    );
};

export default Contact;