

import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer style={{color:"wHITE" , padding :"20px ",backgroundColor:"black",fontWeight: "900"}} className='text-center mt-5'>
            <p><small>Copyright @ {year} All Rights Reserved by Emrul</small></p>
        </footer>
    );
};

export default Footer;