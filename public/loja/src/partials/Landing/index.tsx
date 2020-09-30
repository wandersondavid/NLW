import React from 'react';
import tenisImg from '../../assets/images/adidas.png';
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
                 <div className="title-conteiner">
                    <h2>Sua plataforma de estudo online.</h2>
                    <h3>Sua plataforma de estudo online.</h3>
                 </div>

                 <img src={tenisImg} alt="Plataforma de estudo" className="hero-image"/>
                 <div className="button-container">
                </div>
            </div>
         </div>
     )
}

export default Landing;