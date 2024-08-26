import React from "react"

function Navbar() {
    return(
        <div className="z-50 flex absolute w-11/12 place-self-center my-8 bg-gradient-to-r bg-opacity-70 from-shade-primary via-shade-secondary to-shade-primary p-4 rounded">
            <h1 className="static opacity-80 w-fit text-7xl text-text-col font-sans hover:opacity-100 hover:text-title-col">
                <a href="/" className="">Cyril</a>
            </h1>
            <nav className="absolute inset-y-0 content-center right-8 text-xl text-text-col">
                <a href="/career" className="p-2 hover:opacity-100 hover:underline opacity-80">Werdegang</a>
                <a href="/hobbys" className="p-2 hover:opacity-100 hover:underline opacity-80">Hobbys</a>
            </nav>
        </div>
)
}

export default Navbar