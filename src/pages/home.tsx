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
            <Introduction title="Cyril Llopis" img="Teide_Moon.jpg" alt="Vollmond bei der Schlafstelle auf dem El Teide" bg={false}/>
            <div className="bg-shade-secondary w-fit mx-6 sm:mx-36 lg:mx-auto p-4 mt-10 rounded-l">
                <Img/>
                <Quote quote="Informatiker. Kletterer. Motorradfahrer. Das bin ich!"/>
            </div>
            <Footer />
        </div>
    );
}

export default Home;