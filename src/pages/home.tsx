import React from "react";
import Navbar from "../comoponents/navbar"
import Footer from "../comoponents/footer";
import Introduction from "../comoponents/introduction";
import Article from "../comoponents/article";

function Home() {
    return (
        <div className="flex flex-col min-h-screen bg-body-col">
            <Navbar />
            <Introduction title="Willkommen auf meiner Homepage" img="Teide_Moon.jpg" alt="Vollmond bei der Schlafstelle auf dem El Teide"/>
            <Footer />
        </div>
    );
}

export default Home;