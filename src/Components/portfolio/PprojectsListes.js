import React, { Component } from 'react'
import {portfolioData} from '../../data/portfolioData';
import Projects from './Projects';

import { selectClasses } from '@mui/material';


export default class PprojectsListes extends Component {
    state = {
        projects:portfolioData,
        radios: [
            {id: 1, value: "javascript"},
            {id: 2, value: "PHP"},
            {id: 3, value: "react"},
            {id: 4, value: "python"}
        ],

        selectedRadio: 'javascript'

    };
    handleRadio = (event) => {
        console.log(event.target.value);
        let radio = event.target.value ;
        this.setState = ({selectedRadio:radio})
    }
    render() { 
        let {projects,radios,selectedRadio} =this.state;
        return (
            <div className='portolioContent'>
              <ul className='radioDisplay'>
                 {
                    radios.map((radio)=> {
                        return(
                            <li key={radio.id}>
                                <input 
                                   type='radio'
                                   name='radio'
                                   checked={radio.value === 
                                    selectedRadio}
                                   value={radio.value}
                                   id={radio.value}
                                   onChange={this.handleRadio}
                                   />
                                   <label htmlFor={radio.value}>{radio.value}</label>
                            </li>
                        )
                    })
                 }
              </ul>
              <div className='projects'>
                {
                    projects
                    .filter(item => item.languages.includes(selectedRadio))
                    .map(item => {
                        return(
                            <Projects 
                            key={item.id}
                            item={item} />
                        )
                    }
                        )
                }
              </div>
            </div>
        )
    }
}
