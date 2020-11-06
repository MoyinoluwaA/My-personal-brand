import React from 'react'

// const style = () ={
//     {width:90%}
// }

function Programming() {
    
    return (
        <div>
           <p className="w3-large"><b><i className="fa fa-asterisk fa-fw w3-margin-right w3-text-indigo darken-4"></i>Programming skills</b></p>
           
           <p>HTML</p>
                <div className="w3-light-grey w3-round-xlarge w3-small">
                    <div className="one w3-container w3-center w3-round-xlarge w3-indigo darken-4" >90%</div>
                </div>

            <p>CSS/CSS Frameworks</p>
                <div className="w3-light-grey w3-round-xlarge w3-small">
                    <div className="two w3-container w3-center w3-round-xlarge w3-indigo darken-4">60%</div>
                        
                </div>

            <p>React js</p>
                <div className="w3-light-grey w3-round-xlarge w3-small">
                    <div className="three w3-container w3-center w3-round-xlarge w3-indigo darken-4">50%</div>
                </div>

            <p>Javascript</p>
                <div className="w3-light-grey w3-round-xlarge w3-small">
                    <div className="four w3-container w3-center w3-round-xlarge w3-indigo darken-4"> 65%</div>
                </div>
          <br/>

        </div>
    )
}

export default Programming
