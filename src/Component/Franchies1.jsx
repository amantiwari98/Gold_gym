import React from 'react';
import img1 from '../images/img12.jpg';
import img2 from '../images/img13.jpg';

const Franchies1 = () => {
    return(
        <>
         <div className="container-fluid fran">
            <div className="row">
                <div className="col-md-3">
                    <img src={img1} alt="" />
                </div>
                <div className="col-md-6 fran2">
                    <h1>YOUR GOLD'S GYM <br />LEGECY STARTS<br /> HERE</h1>
                    <button className="btn">GET STARTED</button>
                    <h6>BECOME A GOLD'S GYM FRANCHIES </h6>
                    <p className="mt-3">For more than 50 years, Gold’s Gym has been the world’s trusted fitness authority. From humble beginnings as a small gym in Venice, California, Gold’s
                     Gym has grown into a global icon with 700+ locations serving 3 million people each day across 6 continents and 29 countries.
                     We’ve remained at the forefront of the $94 billion-dollar global fitness industry by
                     delivering the most dynamic fitness experience and a supportive, motivating community.
                     And we are just getting started.</p>
                </div>
                <div className="col-md-3">
                    <img src={img2} alt="" />
                </div>
            </div>
        </div>
        </>
    );
}

export default Franchies1;