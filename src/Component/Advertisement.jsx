import React from 'react';
import './Navbarline.css';
import map from '../images/map.png';
import home from '../images/home.png';
import gym from '../images/gym.png';
import training from '../images/training.png';
import people from '../images/people.png';
import group from '../images/group.png';

const Advertisement = () => {
    return (
        <>
            <div className="container-fluid add2" style={{ marginTop: '60px' }}>
                <h2 className="text-center" style={{ marginBottom: '0px', color:'#3f3f3f' }}>We can give you</h2>
                <h2 className="text-center sp">Much More Then Others</h2>
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row mt-4">
                            <div className="col-md-2 col-sm-12 col-12 col-xs-12">
                                <img src={map} alt=" " /><br></br>
                                <p className="pt-2">25 States</p>
                            </div>
                            <div className="col-md-2 col-sm-12">
                                <img src={home} alt=" " /><br></br>
                                <p className="pt-2">95 Cities</p>
                            </div>
                            <div className="col-md-2 col-sm-12">
                                <img src={gym} alt=" " /><br></br>
                                <p className="pt-2">150 Gyms</p>
                            </div>
                            <div className="col-md-2 col-sm-12">
                                <img src={training} alt=" " /><br></br>
                                <p className="pt-2"> Personal Training</p>
                            </div>
                            <div className="col-md-2 col-sm-12">
                                <img src={people} alt=" " /><br></br>
                                <p className="pt-2">Corporate Wellness</p>
                            </div>
                            <div className="col-md-2 col-sm-12">
                                <img src={group} alt=" " /><br></br>
                                <p className="pt-2">Group Program</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Advertisement