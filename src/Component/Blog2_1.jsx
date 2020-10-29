import React from 'react';
import './Home.css';
import Button from '@material-ui/core/Button';
import img1 from '../images/blog2.webp';

const Blog2_1 = () => {
    return(
        <>
         <div className="container mt-5">
           <div className="row">
               <div className="col-md-5">
               <div className="fb">
                   <p className="text-muted">FEATURED STORY</p>
                   <h4>Why Breathwork Matters in Your Workout</h4>
                   <p>3 ways mindful breathing gets better results – and helps improve your mental health.</p>
                    <Button className="b" color="primary" variant="contained">Read More</Button>
               </div>
               </div>
               <div className="col-md-7">
                   <img src={img1} alt="" style={{width:'100%', height:'350px'}}  />
               </div>
           </div>
       </div>
        </>
    );
}

export default Blog2_1;