import React from 'react';
import MediaCard1 from './Blogcard7';
import MediaCard2 from './Blogcard8';
import MediaCard3 from './Blogcard9';
import './Home.css';

const Blog2_2 = () => {
    return(
         <>
          <div className="container stories">
                <h4>SUCCESS STORIES</h4>
                <div className="row card1">
                    <div className="col-md-4">
                        <MediaCard1 /> 
                    </div>
                    <div className="col-md-4">
                        <MediaCard2 /> 
                    </div>
                    <div className="col-md-4">
                        <MediaCard3 /> 
                    </div>
                </div>
            </div>
         </>
    );
}

export default Blog2_2;