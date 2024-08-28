import React from "react";
import Navbar from "../comoponents/navbar"
import Footer from "../comoponents/footer";
import Introduction from "../comoponents/introduction";
import Quote from "../comoponents/quote";
import Img from "../comoponents/img";

function Home() {
    document.title = 'Cyril Llopis'
    return (
        <div className="flex flex-col bg-body-col">
            <Navbar />
            <Introduction title="Willkommen auf meiner Homepage" img="Teide_Moon.jpg" alt="Vollmond bei der Schlafstelle auf dem El Teide" bg={false}/>
            <div className="bg-shade-secondary w-fit mx-auto p-4 mt-10 rounded-l">
                <Img/>
                <Quote quote="Informatiker. Kletterer. Motorradfahrer. Wer bin ich?"/>
            </div>
            <Footer />
        </div>
    );
}

export default Home;