import React from 'react';
import Navigation from '../Components/Navigation';
import { CopyToClipboard } from 'react-copy-to-clipboard';


const Contact =() => {
   
        const handleCopy = () => {
            alert('tel copied');
        };
    return (
        <div className='contact'>
            <Navigation />
            <div className='contactContent'>
                <div className='header'></div>
                  <div className='contactBox'>
                        <h1>contact me</h1>
                        <ul>
                            <li>
                               <i className='fas fa-map-marker-alt'></i>
                                <span>Constantine,Algeria</span>
                            
                            </li>
                            
                            <li>
                                <i className='fas fa-mobile-alt'></i>
                                <CopyToClipboard text='0665728667'>
                                    <span className='clickInput' 
                                        style={{ cursor: 'pointer' }} 
                                        onClick={() => { alert('The phone number has been copied successfully.');}}>
                                        +213665728667
                                    </span>
                                </CopyToClipboard>
                            </li>

                            <li>
                              <i className='far fa-envelope'></i>
                                <CopyToClipboard text='cheima.bouchaham@univ-constantine2.dz'>
                                    <span className='clickInput' 
                                        style={{ cursor: 'pointer' }} 
                                        onClick={() => { alert('email has been copied successfully.');}}>
                                            cheima.bouchaham@univ-constantine2.dz
                                    </span>
                                </CopyToClipboard>
                            </li>
                      </ul>
                  </div>

                  <div className='socialNetwork'>
                      <ul>
                            <a href='https://www.linkedin.com/in/cheima-bouchaham-3394a22b7/' target='_blank' rel='noopener noreferrer'>
                            <h4>LinkedIn</h4> 
                            <i className='fab fa-linkedin'></i>
                            </a>

                            <a href='https://github.com/chaima9611' target='_blank' rel='noopener noreferrer'>
                            <h4>Github</h4> 
                            <i className='fab fa-github'></i>
                            </a>

                                <a href='https://www.instagram.com/miss_sima_96/' target='_blank' rel='noopener noreferrer'>
                                <h4>Instagram</h4> 
                                <i className="fab fa-instagram"></i>
                                </a>

                                <a href='https://codepen.io/Cheima-Bouchaham' target='_blank' rel='noopener noreferrer'>
                                <h4>codePen</h4> 
                                <i className='fab fa-codepen'></i>
                         </a>
                    </ul>
                 




                </div>
            </div>
           
        </div>
    );
};

export default Contact
