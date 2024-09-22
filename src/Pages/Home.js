import React from 'react'
import Navigation from '../Components/Navigation';

const Home =() => {
    return (
        <div className='home'>
          <Navigation />
          <div className='homeContent'>
             <div className='content'>
                   <h1>BOUCHEHAM CHEIMA </h1>
                   <h3> IT Engineer </h3>
                  <h4>AI && Front-End Developer</h4>
                   
                   <div className='pdf'>
                       
                       <a href='./media/CV_Cheima_BOUCHEHAM.pdf' target='_blank'>
                        Download CV in Frensh 
                        <i className='fas fa-download'></i>
                        </a>
                  </div>
                  <div className='pdf2'>
                       <a href='./media/cvCHEIMA.pdf' target='_blank'>
                        Download CV in English
                        <i className='fas fa-download'></i>
                         </a>
                  </div>
                </div> 
          </div>
            
           
        </div>
    );
};

export default Home