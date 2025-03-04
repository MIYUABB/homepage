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
            <Article title="Bouldern/Klettern" text="Die Leidenschaft fürs Bouldern und Klettern habe ich vor etwa 3 Jahren für mich entdeckt. Nun gehe ich jedoch nur noch selten Bourldern im vergleich zu den vorherigen 3 bis 4 mal in der Woche, da mir der lange Weg zu viel wurde. Deshalb gehe ich jetzt dafür ins Fittnesstraining, um meinen Körper fit zu halten und einen Ausgleich zum sitzenden Alltag zu finden. Ich glaube daran, dass das Mentale einen starken Zusammenhang hat mit dem Physischen." img="Bouldering_square.jpg" imgleft={true} alt="Boulderin"/>
            <Article title="Motorradfahren" text="Seit dem November 2023 besitze ich eine Yamaha Mt-125. Durch Freunde und schon einem Vorinteresse an Motorrädern habe ich mich dazu entschieden ein Motorrad zu kaufen. Mir macht das Fahren allgemein unglaublich spass, zudem kann ich so dem überfüllten ÖV zu Stosszeiten ausweichen. An freien Wochenenden gehe ich ausserdem auch gerne mal einige Pässe fahren." img="Mt-125_square.jpg" imgleft={false} alt="Motorrad"/>
            <Article title="Bergsteigen" text='Vor etwa fünf Jahren habe ich das Bergsteigen für mich entdeckt. Die Aussicht, welche auf jedem Gipfel anderst ist, verzaubert mich jedes einzelne Mal. Für mich ist die belohnende Sicht nach einem anstrengenden Aufstieg eines der besten Gefühle die es gibt. Mein Highlight bis jetzt ist der "El Teide" in Spanien mit einer Höhe von ein bisschen mehr als 3700m (Bild unten links).' img="Hiking.jpg" imgleft={true} alt="Mountains"/>
            <Article title="Ski fahren" text="Skifahren ist für mich jedes Jahr im Winter ein Muss. Die Geschwindigkeit gibt mir jedes einzelne mal einen Adrenalinstoss. Das Hin und Her auf den Brettern ist einfach die Beste Meditation für mich. " img="Skiing.jpg" imgleft={false} alt="Skiing"/>
            <Footer />
        </div>
    );
}

export default Home;