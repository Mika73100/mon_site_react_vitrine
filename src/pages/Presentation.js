import React from 'react';
import Logo from '../components/Logo';
import Mouse from '../components/Mouse';
import Navigation from '../components/Navigation';
import SocialNetwork from '../components/SocialNetwork';

const Presentation = () => {

    const handleDownload = () => {
        // Ajoutez le chemin vers votre fichier PDF
        const pdfPath = '/assets/imgproj/michaelbarreca.pdf';
    
        // Créez un lien temporaire pour le téléchargement
        const link = document.createElement('a');
        link.href = pdfPath;
        link.download = 'michaelbarreca.pdf';
        link.click();
    };

    return (
        <main>
            <Logo />
            <Mouse />
            <Navigation />
            <div className='notFounds'>
                <div className='notFound-content'>
                    
                    <img
                        src="/assets/imgproj/michael.png"
                        alt="Mikadesign"
                        style={{ width: '80%', maxWidth: '90px', height: 'auto', margintop:'200px' }}
                    />

                    <div className='Projet'><h4>Michaël BARRECA</h4></div>
                    <div style={{ maxWidth: '800px', margin: '23px', textAlign: 'left' }}>
                        <p className='content'><strong>En 2020</strong>, j'ai décidé de suivre <strong>ma passion</strong>, me dirigeant vers les métiers du <strong>digital & du design</strong>.<br /><br />
                            Porté par de grandes <strong>ambitions</strong>, j'ai eu le privilège d'intégrer <strong>l'école BRASSART à Annecy</strong>, où j'ai acquis des compétences en <strong>infographie</strong>, <strong>design et web</strong>.
                            <br /><br />
                            Mon parcours s'est ensuite poursuivi chez <strong>ONLINEFORMAPRO</strong> digital learning & development, dans la classe de Laurent Bellon, un formateur exceptionnel qui a partagé ses <strong>connaissances</strong> à travers des projets <strong>web</strong> ambitieux.<br /><br />
                            Enfin, j'ai <strong>conclu</strong> cette période de formation en tant que <strong>concepteur d'application</strong> au Simplon.co de Grenoble, où mes formateurs m'ont enseigné une approche <strong>méthodologique</strong> centrée sur la <strong>réflexion</strong> des concepts.
                        </p>
                        <div className="download-pdf">
                        <button style={{ maxWidth: '800px', margin: '23px', textAlign: 'center' }} onClick={handleDownload}> Télécharger mon cv </button>
                    </div>
                    </div>

                </div>
                <SocialNetwork />
            </div>
        </main>
    );
};

export default Presentation;




















//<img src="/assets/imgproj/mikadesign.png" alt="Mikadesign" className="img" />