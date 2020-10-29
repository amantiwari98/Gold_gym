import React from 'react';

const Form = () => {
    return(
        <>
         <div className="container" style={{marginBottom:'110px', marginTop:'110px'}}>
                <div className="row">
                    {/* <div className="col-md-6">
                        <h1 className=" font-weight-bold">Our <span style={{ color: '#ffe400' }}>Latest Video</span></h1>
                        <iframe width="400" height="400" src="https://www.youtube.com/embed/RLyP0dEsORU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div> */}
                    <div className="col-md-12">
                        <h3 className="text-center">GET IN TOUCH <span className="font-weight-bold" style={{ color: '#ffe400' }}>WITH US</span></h3>
                        <form style={{ marginTop: '28px' }}>
                            <div class="form-group">
                                <select class="form-control mb-3" style={{borderRadius:'1px', boxShadow:'0px 0px 1px black'}} id="exampleFormControlSelect1">
                                    <option>GET A FREE TRAINING SESSION</option>
                                    <option>JOIN THE GYM</option>
                                    <option>APPLY FOR A JOB</option>
                                    <option>INTRESTED IN MONTHLY PROMO</option>
                                    <option>ADVERTISE WITH US</option>
                                    <option>CONTACT US</option>
                                    <option>SUBSCRIBE TO OUR NEWS LETTER</option>
                                </select>
                            </div>
                            <div class="form-group mb-3">
                                <input type="email" class="form-control text-muted" style={{borderRadius:'1px', boxShadow:'0px 0px 1px black'}} id="exampleFormControlInput1" placeholder="Enter Name" />
                            </div>
                            <div class="form-group mb-3">
                                <input type="email" class="form-control" style={{borderRadius:'1px', boxShadow:'0px 0px 1px black'}} id="exampleFormControlInput1" placeholder="Enter Email" />
                            </div>
                            <div class="form-group mb-3">
                                <input type="email" class="form-control" style={{borderRadius:'1px', boxShadow:'0px 0px 1px black'}} id="exampleFormControlInput1" placeholder="Enter Phone" />
                            </div>
                            <div class="form-group mb-3">
                                <select class="form-control" style={{borderRadius:'1px', boxShadow:'0px 0px 1px black'}} id="exampleFormControlSelect1">
                                    <option>Please Select State</option>
                                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                                    <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                    <option value="Assam">Assam</option>
                                    <option value="Bihar">Bihar</option>
                                    <option value="Chandigarh">Chandigarh</option>
                                    <option value="Chhattisgarh">Chhattisgarh</option>
                                    <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                                    <option value="Daman and Diu">Daman and Diu</option>
                                    <option value="Delhi">Delhi</option>
                                    <option value="Lakshadweep">Lakshadweep</option>
                                    <option value="Puducherry">Puducherry</option>
                                    <option value="Goa">Goa</option>
                                    <option value="Gujarat">Gujarat</option>
                                    <option value="Haryana">Haryana</option>
                                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                                    <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                                    <option value="Jharkhand">Jharkhand</option>
                                    <option value="Karnataka">Karnataka</option>
                                    <option value="Kerala">Kerala</option>
                                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                                    <option value="Maharashtra">Maharashtra</option>
                                    <option value="Manipur">Manipur</option>
                                    <option value="Meghalaya">Meghalaya</option>
                                    <option value="Mizoram">Mizoram</option>
                                    <option value="Nagaland">Nagaland</option>
                                    <option value="Odisha">Odisha</option>
                                    <option value="Punjab">Punjab</option>
                                    <option value="Rajasthan">Rajasthan</option>
                                    <option value="Sikkim">Sikkim</option>
                                    <option value="Tamil Nadu">Tamil Nadu</option>
                                    <option value="Telangana">Telangana</option>
                                    <option value="Tripura">Tripura</option>
                                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                                    <option value="Uttarakhand">Uttarakhand</option>
                                    <option value="West Bengal">West Bengal</option>
                                </select>
                            </div>
                            <div class="g-recaptcha" data-sitekey="6Lch6dkZAAAAALJmAsXY5kff8TfzoyfeYqTkatIl"></div>

                          <button className="btn3">JOIN NOW</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Form;