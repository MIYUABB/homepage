import React from "react"

function Quote(props:{quote:string}) {
    return(
        <div className="z-50 mt-4 place-self-center bg-shade-secondary border-2 border-title-col border-opacity-50 rounded-lg p-10">
            <div className="text-text-col opacity-100 text-2xl font-extrabold text-opacity-85 hover:text-opacity-100 hover:transition-all hover:duration-500">{props.quote}</div>
        </div>
    )
}

export default Quote