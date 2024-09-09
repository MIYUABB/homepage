import React from "react";
import Navbar from "../comoponents/navbar"
import Footer from "../comoponents/footer";
import Article from "../comoponents/article";
import Introduction from "../comoponents/introduction";

function Home() {
    document.title = 'Cyril Llopis : Hobbys'
    return (
        <div className="flex flex-col min-h-screen bg-body-col ">
            <Navbar />
            <Introduction title="Hobbys" img="Boulderwall.jpeg" alt="Bouldering wall" bg={true}/>
            <Article title="Bouldern/Klettern" text="Die Leidenschaft fürs Bouldern und Klettern habe ich vor etwa 3 Jahren für mich entdeckt. Seither gehe ich grundsätzlich 3 bis 4 mal die Woche in die Kletterhalle um zu trainieren und den hauptsächlich sitzenden Schulalltag auszugleichen. Ich denke, das Sport etwas sehr wichtiges ist, wenn man einen Bürojob ausübt." img="Bouldering_square.jpg" imgleft={true} alt="Boulderin"/>
            <Article title="Motorradfahren" text="Seit dem November 2023 besitze ich eine Yamaha Mt-125. Durch Freunde und schon einem Vorinteresse an Motorrädern habe ich mich dazu entschieden ein Motorrad zu kaufen. Mir macht das Fahren allgemein unglaublich spass, zudem kann ich so dem überfüllten ÖV zu Stosszeiten ausweichen." img="Mt-125_square.jpg" imgleft={false} alt="Motorrad"/>
            <Article title="Bergsteigen" text='Vor etwa fünf Jahren habe ich das Bergsteigen für mich entdeckt. Die Aussicht, welche auf jedem Gipfel anderst ist, verzaubert mich jedes einzelne mal. Für mich ist die belohnende Sicht nach einem anstrengenden Aufstieg eines der besten Gefühle die es gibt. Mein Highlight bis jetzt ist der "El Teide" in Spanien mit einer Höhe von ein bisschen mehr als 3700m.' img="Hiking.jpg" imgleft={true} alt="Mountains"/>
            <Article title="Ski fahren" text="Skifahren ist für mich jedes Jahr im Winter ein Muss. Die Geschwindigkeit gibt mir jedes einzelne mal einen Adrenalinstoss. Auch alleine wie die Skier über den Schnee gleiten finde ich faszinierend. Zu meinem Glück habe ich Familie in den Bergen, was das ganze nochmals vereinfacht." img="Skiing.jpg" imgleft={false} alt="Skiing"/>
            <Footer />
        </div>
    );
}

export default Home;