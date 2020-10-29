import React from 'react';
import Blog2_1 from './Blog2_1';
import Blog2_2 from './Blog2_2';
import Footer from './Footer';
import Blog from './Mainblog';


const Blog2 = () => {
    return (
        <>
            <Blog2_1 />
            <Blog2_2 />
            <Blog />
            <Footer />
        </>
    );
}

export default Blog2;