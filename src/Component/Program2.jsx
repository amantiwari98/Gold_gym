import React from 'react';
import './Home.css';
import img1 from '../images/img10.jpg';
import img2 from '../images/img11.jpg';
import app from '../images/app2.jpg';

const Program2 = () => {
    return(
        <>
         <div className="container-fluid program">
                <div className="row">
                    <div className="col-md-7">
                        <img src={img1} alt="" />
                    </div>
                    <div className="col-md-5">
                        <img src={img2} alt="" />
                    </div>
                </div>
            </div>
            <div className="container-fluid program2">
               <h1>STRONGER ANYWHERE</h1>
               <h3>FREE-HOME FITNESS <span className="sp">WORKOUT ANYWHERE FOR FREE</span></h3>
            </div>
        </>
    );
}

export default Program2;