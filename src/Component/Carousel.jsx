import React from 'react';
import home1 from '../images/home1.jpg';
import home2 from '../images/home2.jpg';
import home3 from '../images/home3.jpg';
import home5 from '../images/home5.jpg';
import home6 from '../images/home6.jpg';
import home7 from '../images/home7.jpg';

const Carousel = () => {
    return (
        <>
        <div className="container-fluid" style={{paddingLeft:'0px', paddingRight:'0px'}}>
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div className="carousel-item active">
                            <img src={home1} className="d-block w-100" alt="..." style={{height:'500px'}} />
                        </div>
                        <div className="carousel-item">
                            <img src={home2} className="d-block w-100" alt="..." style={{height:'500px'}}  />
                        </div>
                        <div className="carousel-item">
                            <img src={home3} className="d-block w-100" alt="..."  style={{height:'500px'}} />
                        </div>
                        <div className="carousel-item">
                            <img src={home5} className="d-block w-100" alt="..." style={{height:'500px'}}  />
                        </div>
                        <div className="carousel-item">
                            <img src={home6} className="d-block w-100" alt="..."  style={{height:'500px'}} />
                        </div>
                        <div className="carousel-item">
                            <img src={home7} className="d-block w-100" alt="..." style={{height:'500px'}}  />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        {/* <span className="sr-only">Previous</span> */}
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        {/* <span className="sr-only">Next</span> */}
                    </a>
                </div>
            </div>
        </>
    );
}

export default Carousel;