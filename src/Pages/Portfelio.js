import React from 'react'
import Navigation from '../Components/Navigation';
import { NavLink } from 'react-router-dom';
import PprojectsListes from '../Components/portfolio/PprojectsListes';


//import portfolioData from 'src/data/portfolioData';

const Portfelio =() => {
    return (
        <div className='portfolio'>
            <Navigation/>
            <PprojectsListes/>
            
          
            
          
        </div>
    );
};

export default Portfelio