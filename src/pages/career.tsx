import React from 'react';
import Navbar from '../comoponents/navbar';
import Footer from "../comoponents/footer";
import Introduction from "../comoponents/introduction";

function Career() {
    return (
        <div className='flex flex-col min-h-screen bg-body-col'>
            <Navbar />
            <Introduction title="Werdegang" img="KSH_Earth_view.jpg" alt="Bild von einem jungen sympathischen Mann" bg={true}/>
            <Footer />
        </div>
    );
}

export default Career;
