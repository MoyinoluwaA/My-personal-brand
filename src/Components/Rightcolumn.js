import React from 'react'

function Rightcolumn() {
    return (
        <div>
            <div className="w3-twothird">
                <div className='w3-margin-left w3-margin-right'>
                    {/* few things to know about me */}
                    
                    <div className="knowme w3-container w3-card  w3-margin-bottom">
                        <div className='shift'>
                            <h4 className="w3-text-grey">
                                {/* <i className="fa-fw w3-margin-right w3-small w3-text-indigo darken-4"></i> */}
                                Get to know me in six words</h4>
                            {/* <div className="w3-container"> */}
                                <ol className='w3-text-grey w3-margin-left'>
                                    <li>Smart</li>
                                    <li>Hardworking</li>
                                    <li>Goal-getter</li>
                                    <li>Creative</li>
                                    <li>Motivating</li>
                                    <li>Innovative</li>
                                </ol>
                            {/* </div> */}
                        </div>
                    </div>
                    

                    <div className="w3-container w3-card w3-white">
                        <h4 className="w3-text-grey w3-padding-16"><i className="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-indigo darken-4"></i>Education</h4>
                        <div className="w3-container">
                            <h5 className="w3-opacity"><b>Pearls Africa Training</b></h5>
                            <h6 className="w3-text-indigo darken-4"><i className="fa fa-calendar fa-fw w3-margin-right"></i>2020-date</h6>
                            <p>React</p>
                            <hr/>
                        </div>
                        <div className="w3-container">
                            <h5 className="w3-opacity"><b>W3Schools.com</b></h5>
                            <h6 className="w3-text-indigo darken-4"><i className="fa fa-calendar fa-fw w3-margin-right"></i>2020-date</h6>
                            <p>Web Development</p>
                            <hr/>
                        </div>
                        <div className="w3-container">
                            <h5 className="w3-opacity"><b>Grasshopper App</b></h5>
                            <h6 className="w3-text-indigo darken-4"><i className="fa fa-calendar fa-fw w3-margin-right"></i>2020 - date</h6>
                            <p>Javascript training</p>
                            <hr/>
                        </div>
                        <div className="w3-container">
                            <h5 className="w3-opacity"><b>Federal University of Agriculture, Abeokuta</b></h5>
                            <h6 className="w3-text-indigo darken-4"><i className="fa fa-calendar fa-fw w3-margin-right"></i>2014 - 2019</h6>
                            <p>Bachelor Degree (Food Science and Technology)</p><br/>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Rightcolumn
