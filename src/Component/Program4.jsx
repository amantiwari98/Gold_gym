import React from 'react';

const Program4 = () => {
    return(
        <>
          <div className="container-fluid program5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                            <div className="col-md-2">
                                <h6>LOCATE A GYM</h6>
                            </div>
                            <div className="col-md-4">
                                <input type="text" placeholder="Zip Code" />
                            </div>
                            <div className="col-md-4">
                                <input type="text" placeholder="25 Miles" />
                            </div>
                            <div className="col-md-2">
                                <button className="btn">FIND A GYM</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Program4;