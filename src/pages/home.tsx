import React from "react";
import Navbar from "../comoponents/navbar"
import Footer from "../comoponents/footer";
import Introduction from "../comoponents/introduction";

function Home() {
    return (
        <div className="flex flex-col bg-body-col">
            <Navbar />
            <Introduction title="Willkommen auf meiner Homepage" img="Teide_Moon.jpg" alt="Vollmond bei der Schlafstelle auf dem El Teide" bg={false}/>
            <Footer />
        </div>
    );
}

export default Home;