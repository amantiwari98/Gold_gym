import React from 'react';
import './Home.css';
import img1 from '../images/con.jpg';
import img2 from '../images/img9.jpg'

const Contactform = () => {
    return(
        <>
           <div className="container fit">
                <h1 className="text-center mt-4">GET FIT WITH US</h1>
                <div className="row">
                    <div className="col-md-7 mt-5">
                        <img src={img2} alt=" " style={{ width: '100%', height: '400px' }} />
                    </div>
                    <div className="col-md-5 mt-5 fit1">
                        <form>
                            <div class="form-group mb-2">
                                <label for="exampleInputEmail1">First Name</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="First Name" />
                            </div>
                            <div class="form-group mb-2">
                                <label for="exampleInputPassword1">Last Name</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Last Name" />
                            </div>
                            <div class="form-group mb-2">
                                <label for="exampleInputPassword1">Email Address</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Email Address" />
                            </div>
                            <div class="form-group mb-2">
                                <label for="exampleInputPassword1">Phone Number</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Phone Number" />
                            </div>
                            <div class="form-group mb-2">
                                <label for="exampleInputPassword1">Zip Code</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Zip Code" />
                            </div>
                            <button type="submit" class="btn btn-primary mt-2">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contactform;