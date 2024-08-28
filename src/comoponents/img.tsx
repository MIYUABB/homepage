import React from "react"

function Img() {
    return(
        <div className="w-fit mx-auto">
            <img src={require("../images/Portrait.jpg")} alt="Ich" className="h-96 border-4 rounded-lg border-title-col"/>
        </div>
    )
}

export default Img