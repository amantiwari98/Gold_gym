import React from 'react';
import ImgMediaCard5 from './Mediacard';
import Sdata from './Sdata';

const Mainblog = () => {
    return (
        <>
         <div className="container-fluid">
                   <div className="row">
                       <div className="col-10 mx-auto">
                       <h2 className="mb-3">RECENT BLOGS</h2>
                           <div className="row">
                           {
                                Sdata.map((val, ind) => {
                                    return <ImgMediaCard5
                                        key={ind}
                                        imgsrc={val.imgsrc}
                                        title={val.title}
                                        content={val.content}

                                    />

                                })
                            }
                           </div>
                       </div>
                   </div>
            </div>
        </>
    );
}

export default Mainblog;