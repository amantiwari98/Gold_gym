import React from 'react';

const Testimonials = () => {
    return (
        <>
         <div className="container-fluid mb-5" style={{marginTop:'120px'}}>
                <h1 className="text-center font-weight-bold" style={{letterSpacing:'3px', fontSize:'45px', }}>Testimonials</h1>
                <h6 className="text-center text-uppercase" style={{}}>What Our Clients Says</h6>
                <div className="row" style={{marginTop:'70px'}}>
                    <div className="col-8 mx-auto">
                        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <p style={{letterSpacing:'2px'}}>"Thanks to the Gold's Gym team for the goodwill gesture and for creating a fun workout environment. Loving all the new equipment. Happy to have you open and enjoying the experience. Thanks Team Gold's!"</p>
                                </div>
                                <div className="carousel-item">
                                    <p style={{letterSpacing:'2px'}}>"Working out at Gold’s Gym has helped me rediscover life. I am a much happier person and enjoying life
to the fullest. I hope my story will inspire other too.."</p>
                                </div>
                                <div className="carousel-item">
                                    <p style={{letterSpacing:'2px'}}>I am a member of Gold’s Gym Kandivali West and have been so for the past 4 years. I am 58 years of age and skilled mountaineer.
 I have been trekking all across India forbecause I wathe trainers and staff.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Testimonials;