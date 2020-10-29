import React from 'react';
import MediaCard from './Blogcard';
import MediaCard2 from './Blogcard2';
import MediaCard3 from './Blogcard3';
import MediaCard4 from './Blogcard4';
import MediaCard5 from './Blogcard5';
import MediaCard6 from './Blogcard6';


const Blog = () => {
    return (
        <>
            <div className="container blog mb-5">
                <h1 className="text-center mb-4">Latest <span style={{ color: '#ffe400' }}>Events</span></h1>
                <div id="carouselExampleControls3" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="row">
                                <div className="col-md-4">
                                    <MediaCard />
                                </div>
                                <div className="col-md-4">
                                    <MediaCard3 />
                                </div>
                                <div className="col-md-4">
                                    <MediaCard4 />
                                </div>
                            </div>

                        </div>
                        <div className="carousel-item">
                            <div className="row">
                                <div className="col-md-4">
                                    <MediaCard5 />
                                </div>
                                <div className="col-md-4">
                                    <MediaCard2 />
                                </div>
                                <div className="col-md-4">
                                    <MediaCard6 />
                                </div>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleControls3" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" style={{ padding:'15px'}} aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls3" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" style={{ padding:'15px'}}  aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </>
    );
}

export default Blog;