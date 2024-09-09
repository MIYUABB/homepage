import React from 'react';
import Navbar from '../comoponents/navbar';
import Footer from "../comoponents/footer";
import Introduction from "../comoponents/introduction";
import Article from "../comoponents/article";

function Career() {
    document.title = 'Cyril Llopis : Career'
    return (
        <div className='flex flex-col min-h-screen bg-body-col'>
            <Navbar />
            <Introduction title="Werdegang" img="KSH_Earth_view.jpg" alt="Bild von einem jungen sympathischen Mann" bg={true}/>
            <Article title="Kindergarten bis zur 6. Klasse" text="Die Zeit bis in die sechste Klasse habe ich im Schulhaus Hofacker verbracht. Es war eine ziemlich normale Schulzeit, bis auf das fünfte und sechste Jahr, da zu dieser Zeit grosse Arbeiten am Schulhaus begonnen haben und somit ein Grossteil des Areals nicht benutzbar war. Ansonsten war es eine gute Erfahrung in dieser Schule." img="Hofacker.jpg" imgleft={false} alt="hofacker schulhaus"/>
            <Article title="Sekundarstufe" text="In der Sekundarstufe ging ich ans Hirschengraben, welches einen sehr zentralgelegenen Standort hat. In vier Minuten ist man am HB, in zwei am Central. Die Zeit in der Sek war sehr enspannt und ich lebte einfach mein Leben." img="Hirschengraben.jpg" imgleft={true} alt="Schulhaus Hirschengraben"/>
            <Article title="Kantonschule Hottingen" text='Ich besuche nun seit zwei Jahren die Informatikmittelschule(IMS) an der Kantonschule Hottingen(KSH). Die IMS war für mich in der Sek der "Notfallplan", da ich mich zu der Zeit noch mehr für eine Lehrstelle interessierte. Jedoch gefällt mir die IMS nun besser als eine Lehrstelle, da ich zu bei meinen ehemaligen Sek-Freunden sehe, wie es in einer Lehre ist.' img="KSH_hof.jpg" imgleft={false} alt="Kantonschule Hottingen"/>
            <Footer />
        </div>
    );
}

export default Career;
