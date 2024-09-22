import { Icon } from '@mui/material';
import React, { Component } from 'react'

export default class Projects extends Component {
    state = {
        showInfo : false
    }
    handleInfo = () => {
        this.setState({
            showInfo :!this.state.showInfo
        })
    }


    render() { 
        let {name,site, languagesIcons, source, info, picture } = this.props.item;
        return (
            <div className='project'>
                <div className='icons'>
                    {languagesIcons.map(icon =>
                    <i className={icon} key={icon}></i>)}
                </div>
                <h3> {name} </h3>
               
                <img src={picture} alt='' onClick={this.handleInfo}/>
                <span className='infos' onClick={this.handleInfo}>
                    <i className='fas fa-plus-circle'></i>
                </span>

                {
                  this.state.showInfo && (
                        <div className='showInfos'>
                            <div className='infosContent'>
                                <div className='head'>
                                 <h2>{name}</h2> 
                                
                                 
                                 <div className='sourceCode'>
                                    <a href= {source} rel= "noopener noreferrer"
                                    className='button' target='_blank'>code sourceCode</a>
                                    </div>
                                </div>
                                <p className='text'>{info}</p>
                                <h5>
                                        <a href={'https://chaima9611.github.io/RICEPES/'} target="_blank" rel="noopener noreferrer">
                                            {site}
                                        </a>
                                 </h5>

                                <div className='button return'
                                 onClick={this.handleInfo}>return to page</div>
                            </div>
                        </div>
                    ) 
                }
            </div>
        );
    }
}
