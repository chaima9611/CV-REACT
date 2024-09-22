import React from 'react';

const PprogressBar = (props) => {
    console.log(props);
    return(
        <div>
            <h3>{props.title}</h3>
            <div className='years'>
                <span>Years of experience</span>
                <span>1 year</span>
                <span>2 years</span>
            </div>

            <div>
                {
                props.languages.map((item) => {
                let xpYears = 2;
                let PprogressBar = item.xp / xpYears*100 + '%';
                return(
                    <div key={item.id}
                     className= 'languagesList'>

                       <li>{item.value}</li> 
                       <div className='PprogressBar' style={
                        {width:PprogressBar}}></div>
                    </div>
                )}
                )
                }

            </div>
        </div>
    );
};
export default PprogressBar;