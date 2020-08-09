import React from 'react';
import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';
import  { Link } from 'react-router-dom'

import studyIcon from '../../assets/images/icons/study.svg';
import giveClassIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import './styles.css'


function Landing() {
     return(
         <div id="page-landing">
             <div id="page-landing-content" className="content">
                 <div className="logo-conteiner">
                     <img src={logoImg} alt="Proffy"/>
                     <h2>Sua plataforma de estudo online.</h2>
                 </div>
                 <img src={landingImg} alt="Plataforma de estudo" className="hero-image"/>

                 <div className="button-container">
                     <Link to="/study" className="study">
                        <img src={studyIcon} alt="Cadastrar"/>
                        Cadastrar
                     </Link>
                     <Link to="/give-classes" className="give-classes">
                        <img src={giveClassIcon} alt="listar"/>
                        listar
                     </Link>
                </div>
                <span className="total-connections">
                    {/* <img src={purpleHeartIcon} alt="Coração roxo"/> */}
                </span>
            </div>
         </div>
     )
}

export default Landing;