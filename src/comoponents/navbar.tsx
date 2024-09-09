import React, {useState} from "react"




function Navbar(this: any) {
    const [activated, setActivated] = useState(true)
    const [dropdownState, changeState] = useState(true)
    function activateMenu(){
        console.log("active")
        let navigation = document.querySelector("#navigation")
        if (activated){
            if (dropdownState){
                console.log("on")
                navigation!.className = "visible"
                changeState(false)
            } else {
                console.log("off")
                navigation!.className = "invisible"
                changeState(true)
            }
            setActivated(false)
        } else {
            setActivated(true)
        }

    }

    if (window.innerWidth > 680){
        return(
            <div className="z-50 flex absolute w-11/12 h-32 place-self-center my-8 bg-gradient-to-r bg-opacity-70 from-shade-primary via-shade-secondary to-shade-primary p-4 rounded">
                <h1 className="pl-4 place-self-center opacity-80 w-fit text-7xl text-text-col font-sans hover:opacity-100 hover:text-title-col">
                    <a href="/" className="">Cyril</a>
                </h1>
                <nav className="absolute inset-y-0 content-center right-8 text-xl text-text-col">
                    <a href="/" className="p-2 hover:opacity-100 hover:underline opacity-80">Startseite</a>
                    <a href="/career" className="p-2 hover:opacity-100 hover:underline opacity-80">Werdegang</a>
                    <a href="/hobbys" className="p-2 hover:opacity-100 hover:underline opacity-80">Hobbys</a>
                    <a href="https://github.com/MIYUABB?tab=repositories" className="p-2 hover:opacity-100 hover:underline opacity-80" target="_blank" rel="noreferrer">GitHub</a>
                </nav>
            </div>
        )
    } else {
        return (
            <div className="z-50 flex absolute w-11/12 h-32 place-self-center my-8 bg-gradient-to-r bg-opacity-70 from-shade-primary via-shade-secondary to-shade-primary p-4 rounded">
                <h1 className="pl-4 place-self-center opacity-80 w-fit text-7xl text-text-col font-sans hover:opacity-100 hover:text-title-col">
                    <a href="/" className="">Cyril</a>
                </h1>
                <button onClick={activateMenu} className="absolute right-4 place-self-center">
                    <label>
                        <div className="w-9 h-10 cursor-pointer flex flex-col items-center justify-center">
                            <input className="hidden peer" type="checkbox" />
                            <div className="w-[50%] h-[2px] bg-title-col rounded-sm transition-all duration-300 origin-left translate-y-[0.45rem] peer-checked:rotate-[-45deg]"></div>
                            <div className="w-[50%] h-[2px] bg-title-col rounded-md transition-all duration-300 origin-center peer-checked:hidden"></div>
                            <div className="w-[50%] h-[2px] bg-title-col rounded-md transition-all duration-300 origin-left -translate-y-[0.45rem] peer-checked:rotate-[45deg]"></div>
                        </div>
                    </label>
                </button>
                <div id="navigation" className="invisible">
                    <nav className="text-text-col">
                        <a href="/" className="p-2 hover:opacity-100 hover:underline opacity-80">Startseite</a>
                        <a href="/career" className="p-2 hover:opacity-100 hover:underline opacity-80">Werdegang</a>
                        <a href="/hobbys" className="p-2 hover:opacity-100 hover:underline opacity-80">Hobbys</a>
                        <a href="https://github.com/MIYUABB?tab=repositories"
                           className="p-2 hover:opacity-100 hover:underline opacity-80" target="_blank"
                           rel="noreferrer">GitHub</a>
                    </nav>
                </div>
            </div>
        )
    }

}

export default Navbar