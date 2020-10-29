import React from 'react';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import EditLocationIcon from '@material-ui/icons/EditLocation';
import './Navbarline.css';

const Contact2 = () => {
    return (
        <>
            <div className="container-fluid add">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                            <div className="col-md-2 pt-2 order-1">
                            <h4>  <PhoneAndroidIcon />+919817678881</h4>
                    </div>
                            <div className="col-md-8 order-2">
                                <h4 className=" address pt-2"><EditLocationIcon />Gold's Gym Fitness Institute:- Mumbai:- 9029002873, Pune:- 8411907222, Delhi:- 9560044981</h4>
                            </div>
                            <div className="col-md-2 pt-2 order-3">
                              <h4><MailOutlineIcon />Wecare@goldsgym.in</h4>
                    </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Contact2;