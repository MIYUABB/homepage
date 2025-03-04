import React from "react";
import Navbar from "../comoponents/navbar"
import Footer from "../comoponents/footer";
import Introduction from "../comoponents/introduction";
import Profile from "../comoponents/profile";

function Home() {
    document.title = 'Cyril Llopis'
    return (
        <div className="flex flex-col bg-body-col">
            <Navbar />
            <Introduction title="Cyril Llopis" img="Teide_Moon.jpg" alt="Vollmond bei der Schlafstelle auf dem El Teide" bg={false}/>
            <Profile/>
            <Footer />
        </div>
    );
}

export default Home;