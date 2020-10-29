import React from 'react';
import logo3 from '../images/logo3.png';
import logo4 from '../images/logo4.png';
import logo5 from '../images/logo5.png';

const Logo = () => {
    return (
        <>
         <div className="container" style={{marginTop:'60px', marginBottom:'80px'}}>
                <div className="row">
                    <div className="col-md-4">
                        <img src={logo3} alt="" />
                    </div>
                    <div className="col-md-4">
                        <img src={logo4} alt="" />
                    </div>
                    <div className="col-md-4">
                        <img src={logo5} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Logo;