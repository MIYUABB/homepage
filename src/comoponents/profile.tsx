import React from "react"

function Profile() {
    return (
        <div className="bg-shade-secondary w-fit mx-6 sm:mx-36 lg:mx-auto p-4 mt-10 rounded-l grid grid-cols-3 gap-8 auto-cols-max">
            <div className="w-fit mx-auto">
                <img src={require("../images/Portrait.jpg")} alt="Ich"
                     className="h-96 border-4 rounded-lg border-title-col"/>
            </div>
            <div>
                <ul className="text-text-col  lg:text-xl">
                    <li>Name:</li>
                    <li>Geburtstag:</li>
                    <li>Nationalität:</li>
                    <li>Tätigkeit:</li>
                    <li>Sprachkenntnisse:</li>
                    <br/>
                    <li>Interessen: <br/></li>
                </ul>
            </div>
            <div>
                <ul className="text-text-col lg:text-xl">
                    <li>Cyril Llopis</li>
                    <li>17.03.2007  </li>
                    <li>Schweiz, Spanien, Frankreich</li>
                    <li>Schüler an der IMS</li>
                    <li>Deutsch, Englisch, <br/> Spanisch, Französisch</li>
                    <li>Fittness, Klettern, <br/> Motorradfahren, Schach</li>
                </ul>
            </div>
        </div>
)
}

export default Profile