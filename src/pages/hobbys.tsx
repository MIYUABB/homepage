import React from "react";
import Navbar from "../comoponents/navbar"
import Footer from "../comoponents/footer";
import Article from "../comoponents/article";
import Introduction from "../comoponents/introduction";

function Home() {
    return (
        <div className="flex flex-col min-h-screen bg-body-col">
            <Navbar />
            <Introduction title="Hobbys" img="Boulderwall.jpeg" alt="Bouldering wall" bg={true}/>
            <Article title="Bouldern/Klettern" text="Die Leidenschaft fürs Bouldern und Klettern habe ich vor etwa 2 Jahren für mich entdeckt. Seither gehe ich grundsätzlich 3 bis 4 mal die Woche in die Kletterhalle. Das Klettern ist für mich die perfekte abwechslung zum schulischen Alltag. Momentan bin ich auf einem 6c/7a Niveau." img="Bouldering_square.jpg" imgleft={true} alt="Boulderin"/>
            <Article title="Motorradfahren" text="Seit dem November 2023 besitze ich eine Mt-125. Ich habe diese erst gekauft, um zu pendeln und mir gefällt die Kraft welche ein Motor mit sich bringt. Jetzt jedoch ist es vorallem das Freiheitsgefühl, welches den Spass bereitet." img="Mt-125_square.jpg" imgleft={false} alt="Motorrad"/>
            <Article title="Bergsteigen" text='Vor etwa fünf Jahren habe ich das Bergsteigen für mich entdeckt. Die Aussicht, welche auf jedem Gipfel anderst ist, verzaubert mich jedes einzelne mal. Für mich ist die belohnende Sicht nach einem anstrengenden Aufstieg eines der besten Gefühle die es gibt. Mein Highlight bis jetzt ist der "El Teide" in Spanien mit einer Höhe von etwa 3700m.' img="Hiking.jpg" imgleft={true} alt="Mountains"/>
            <Article title="Ski fahren" text="Im Winter ist Skifahren für mich ein Muss. Die Geschwindigkeit gibt mir jedes einzelne mal ein Adrenalinstoss. Auch alleine wie die Skier über den Schnee gleiten finde ich faszinierend. Zu meinem Glück habe ich Familie in den Bergen, was das ganze nochmals vereinfacht." img="Skiing.jpg" imgleft={false} alt="Skiing"/>
            <Footer />
        </div>
    );
}

export default Home;