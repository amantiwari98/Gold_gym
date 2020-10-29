import React from 'react';
import gym from '../images/gym.jpg';
import gym4 from '../images/gym4.jpg';
import gym5 from '../images/gym5.jpg';

import img1 from '../images/img6.jpg';
import img2 from '../images/img2.png';
import img3 from '../images/img3.png';
import img4 from '../images/img4.png';

const Newgym = () => {
    return (
        <>
            <div className="container-fluid newgym">
                <h1 style={{ color: 'white', paddingTop: '45px', fontSize: '40px' }} className="text-center"><span style={{ color: '#ffe400', fontWeight: 'bold' }}>GYMS COMING </span>Soon</h1>

                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                            <div className="col-md-7 order-2" style={{ marginTop: '40px' }}>
                                <h6 style={{ color: 'white', letterSpacing: '1px', fontSize: '18px' }}>GYMS COMING SOON : <span style={{ color: '#ffe400' }}> KHARADI – PUNE | NANDED - MAHARASHTRA | CHAKAN - PUNE | YELAHANKA - BENGALURU | KANAKPURA ROAD - BENGALURU | DIPHU - ASSAM </span></h6>
                            </div>
                            <div className="col-md-5 order-1">
                                <div id="carouselExampleControls1" class="carousel slide" data-ride="carousel">
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img src={gym} class="d-block w-100" alt="..." style={{ height: '300px' }} />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={gym4} class="d-block w-100" alt="..." style={{ height: '300px' }} />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={gym5} class="d-block w-100" alt="..." style={{ height: '300px' }} />
                                        </div>
                                    </div>
                                    <a class="carousel-control-prev" href="#carouselExampleControls1" role="button" data-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        {/* <span class="sr-only">Previous</span> */}
                                    </a>
                                    <a class="carousel-control-next" href="#carouselExampleControls1" role="button" data-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        {/* <span class="sr-only">Next</span> */}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid institute mb-5" >
                <h1 className="text-center"><span style={{ color: '#ffe400' }}>Gold's Gym</span> Fitness Institute</h1>
                <h4 className="text-center">Physical Activity Or Can Improve Your Health</h4>
                <div className="row">
                    <div className="col-10 mx-auto" style={{ position: 'relative' }}>
                        <div className="row mt-5">
                            <div className="col-md-3">
                                <img src={img1} alt="" style={{ height: '180px', width: '100%' }} />
                            </div>
                            <div className="col-md-3">
                                <img src={img2} alt="" style={{ height: '180px', width: '100%' }} />
                            </div>
                            <div className="col-md-3">
                                <img src={img3} alt="" style={{ height: '180px', width: '100%' }} />
                            </div>
                            <div className="col-md-3">
                                <img src={img4} alt="" style={{ height: '180px', width: '100%' }} />
                            </div>
                        </div>
                        <button className="btn mt-2 btn6">Know More</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Newgym;