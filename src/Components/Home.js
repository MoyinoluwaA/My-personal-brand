import React from 'react';
import Moyin from './Images/Moyin.jpg'
import Footer from './Footer'
import About from './About'
import Programming from './Programming'
import Rightcolumn from './Rightcolumn'
import Leftcolumn from './Leftcolumn';

function Home() {
    return (
        <div className='w3-light-grey'>
            {/* Page Container */}
            <div className="pagecontainer w3-content w3-margin-top">

            {/* The Grid */}
            <div className="w3-row-padding">
            
                     {/* Left Column */}
                <Leftcolumn/>
                    {/* End Left Column */}
                    {/* Right Column */}
                <Rightcolumn/>
                    {/* End Right Column */}
               

                {/* End Grid */}    
            </div>

                {/* End Page Container */}
            </div>

            <About/>
            <Footer/>
        </div> 
        
    )
}

export default Home
