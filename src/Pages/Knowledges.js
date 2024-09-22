import React from 'react'
import Hobbies from '../Components/knowledges/Hobbies';
import Languages from '../Components/knowledges/Languages';
import OtherSkils from '../Components/knowledges/OtherSkils';
import Navigation from '../Components/Navigation';
import Experiances from '../Components/knowledges/Experiances';
const Knowledge =() => {
    return (
        <div className='knowledges'>
            <Navigation/>
             <div className='knowledgesComponents'>
                <Languages />
                <Hobbies />
                <OtherSkils/>
                <Experiances/>
             </div>      
        </div>
    );
};

export default Knowledge


