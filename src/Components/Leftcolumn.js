import React from 'react'
import Moyin from './Images/Moyin.jpg'
import Programming from './Programming'

function Leftcolumn() {
    return (
        <div>
            <div className="w3-third">
                
                <div className="w3-margin-top w3-margin-left w3-white w3-text-grey w3-card-4">
                    <div className="w3-display-container">
                        <img className='w3-image moyinimg' src={Moyin} alt="Avatar"/>
                        {/* <div className="w3-display-bottomleft w3-container w3-text-black">
                            <h3>Hi! <br/> <span className='name'>I am Moyin</span ></h3>
                        </div> */}
                    </div>
                    
                    <div className="w3-container">
                        <h3>Hi! <span className='name'>I am Moyin</span ></h3>
                        <p><i className="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-indigo darken-4"></i>Front End Web Developer</p>
                        <p><i className="fa fa-home fa-fw w3-margin-right w3-large w3-text-indigo darken-4"></i>Lagos, Nigeria</p>
                        <p><i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-indigo darken-4"></i>dayoh14@gmail.com</p>
                        <p><i className="fa fa-phone fa-fw w3-margin-right w3-large w3-text-indigo darken-4"></i>08077781990</p>
                        <hr/>
                        <Programming/>
                    </div>
                </div>
                
            </div><br/>
        </div>
    )
}

export default Leftcolumn
