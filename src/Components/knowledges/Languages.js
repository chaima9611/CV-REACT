import React, { Component } from 'react'
import PprogressBar from './PprogressBar';

export default class Languages extends Component {
    state = {
        languages :[
            {id: 1, value :'Javascript', xp:1.5},
            {id: 2, value :'Css', xp:1.5},
            {id: 3, value :'PHP', xp:1},
            {id: 4, value :'HTML', xp:1.9},
            {id: 4, value :'Python', xp:1}
        ],
        frameworks :[
            {id: 1, value :'React js', xp:1.4},
            {id: 2, value :'Material UI', xp:1},
            {id: 4, value :'machine learning libraries', xp:1}
        ]
}
    render() {
        let {languages, frameworks} = this.state;
        return (
            
            <div className='languagesFrameworks'>
                <PprogressBar 
                languages={languages}
                className='languegesDisplay'
                title='Programing Languages' 
                
                />
                
                <PprogressBar 
                languages={frameworks}
                title='Frameworks and Libraries'
                className='frameworksDisplay'
                />
               
            </div>
        )
    }
}
