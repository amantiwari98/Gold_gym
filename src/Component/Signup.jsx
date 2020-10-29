import React from 'react';
import './Home.css';

const Signup = () => {
    return(
        <>
         <div className="container-fluid signup">
                <div className="row row1">
                    <div className="col-md-3 offer order-1">
                        <h2 className="text-center spoffer">SPECIAL<br /> OFFER</h2>
                    </div>
                    <div className="col-md-6 text3 order-2">
                        <h2 className="text-center spoffer2">BUY A GOLD'S GYM <br /> MEMBERSHIP TODAY</h2>
                        <p className="text-center" style={{letterSpacing:'2px'}}>START YOU FITNESS JOURNEY TODAY</p>
                    </div>
                    <div className="col-md-3 text4 order-3">
                      <button className="btn btn2">Sign Me Up</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Signup;