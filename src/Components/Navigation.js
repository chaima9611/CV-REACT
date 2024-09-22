import { light } from '@mui/material/styles/createPalette';
import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
    return (
        <div className='sidebar'>
            <div className='id'>
              <div className='idContent'>
                   <img src='./media/chaimapic.JPG' alt='profil-pic' width={150 }/>
                   <h3>BOUCHEHAM CHEIMA</h3>
              </div>
            </div>

            <div className='navigation'>
                <ul>
                    <li>
                    <NavLink exact to ='/' activeClassName='navAcrive'>
                        <i className='fas fa-home'></i>
                        <span>Home</span>

                    </NavLink>
                    </li>

                    <li>
                    <NavLink exact to ='/Knowledge' activeClassName='navAcrive'>
                        <i className='fas fa-mountain'></i>
                        <span>Knowledges</span>

                    </NavLink>
                    </li>

                    <li>
                    <NavLink exact to ='/Portfelio' activeClassName='navAcrive'>
                        <i className='fas fa-images'></i>
                        <span>Portfelio</span>

                    </NavLink>
                    </li>

                    <li>
                    <NavLink exact to ='/Contact' activeClassName='navAcrive'>
                        <i className='fas fa-address-book'></i>
                        <span>Contact</span>

                    </NavLink>
                    </li>
                </ul>

            </div >



            <div className='socialNetwork'>
                <ul>
                    <li>
                        <a href='https://www.linkedin.com/in/cheima-boucheham-a6b7a3250/' target={'blank'} rel='noopener noreferre'>
                            <i className='fab fa-linkedin'></i>
                        </a>
                    </li>

                    <li>
                        <a href='https://github.com/chaima9611' target={'blank'} rel='noopener noreferre'>
                            <i className='fab fa-github'></i>
                        </a>
                    </li>

                    <li>
                        <a href='https://www.instagram.com/miss_sima_96/' target={'blank'} rel='noopener noreferre'>
                            <i className='fab fa-instagram'></i>
                        </a>
                    </li>

                    <li>
                        <a href='https://codepen.io/Cheima-Bouchaham' target={'blank'} rel='noopener noreferre'>
                            <i className='fab fa-codepen'></i>
                        </a>
                    </li>
                </ul>

                <div className='signature'>
                    <p> CHEIMA </p>
                </div>

            </div>
            
        </div>
    );
};

export default Navigation
