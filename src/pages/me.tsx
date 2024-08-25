import React from 'react';
import Navbar from '../comoponents/navbar';
import Footer from "../comoponents/footer";
import Introduction from "../comoponents/introduction";
import Article from "../comoponents/article";

function Me() {
    return (
        <div className='flex flex-col min-h-screen bg-body-col'>
            <Navbar />
            <Introduction title="Ich als Person" img="Teide_Moon.jpg" alt="Bild von einem jungen sympathischen Mann"/>
            <Article title="Bouldern/Klettern" text="Die Leidenschaft fürs Bouldern und Klettern habe ich vor etwa 2 Jahren für mich entdeckt. Seither gehe ich grundsätzlich 3 bis 4 mal die Woche in die Kletterhalle." img="Bouldering.jpg" imgleft={true} alt="Ich am Bouldern"/>
            <Footer />
        </div>
    );
}

export default Me;