import React from "react"

function Footer() {
    return(
        <footer className="z-50 static mt-10 w-screen px-60 bg-shade-primary p-8 grid grid-cols-2 grid-rows-1 gap-3 text-text-col">
            <div className="m-auto">
                <h6 className="underline decoration-double text-lg text-title-col">Kontakt</h6>
                Cyril Llopis <br/>
                cyril.llopis@gmail.com
            </div>
            <div className="m-auto">
                <h6 className="underline decoration-double text-lg text-title-col">Website</h6>
                <a className="hover:underline" href="/">Start</a><br/>
                <a className="hover:underline" href="/src/pages/career">Über mich</a><br/>
                <a className="hover:underline" href="/hobbys">Hobbys</a>
            </div>
        </footer>
    )
}

export default Footer