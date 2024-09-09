import React from "react"

function Article(props: { title: string , text: string, img: string, imgleft: boolean, alt:string }){
    if (window.innerWidth > 680){
        if(props.imgleft) {
            return(
                <div className="mx-6 md:mx-20 lg:mx-50 z-50 md:mt-10 mt-5">
                    <div className="h-min grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 bg-gradient-to-br from-shade-primary to-shade-secondary md:p-2 lg:p-4 rounded-lg">
                        <img src={require("../images/" + props.img)} alt={props.alt} className="rounded h-fit place-self-center lg:place-self-start w-11/12 lg:h-11/12"/>
                        <div className="p-8 rounded w-fit h-fit place-self-center text-lg">
                            <h2 className="text-title-col text-center lg:text-start lg:text-xl underline">{props.title}</h2>
                            <div className="text-text-col p-2">{props.text}</div>
                        </div>
                    </div>
                </div>
            )
        }else {
            return (
                <div className="mx-6 md:mx-20 lg:mx-50 z-50 md:mt-10 mt-5">
                    <div className="h-min grid grid-flow-row lg:grid-flow-col grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 bg-gradient-to-br from-shade-primary to-shade-secondary md:p-2 lg:p-4 rounded-lg">
                        <div className="p-8 rounded w-fit h-fit place-self-center text-lg">
                            <h2 className="text-title-col text-center lg:text-start lg:text-xl underline">{props.title}</h2>
                            <div className="text-text-col p-2">{props.text}</div>
                        </div>
                        <img src={require("../images/" + props.img)} alt={props.alt} className="rounded h-fit place-self-center lg:place-self-end pb-4 w-11/12 lg:max-w-96"/>
                    </div>
                </div>
            )
        }
    } else {
        return (
            <div className="mx-6 z-50 mt-10">
                <div className="h-min grid grid-rows-2 bg-gradient-to-br from-shade-primary to-shade-secondary rounded-lg">
                    <img src={require("../images/" + props.img)} alt={props.alt} className="rounded h-fit place-self-center py-4 w-11/12"/>
                    <div className="p-8 rounded w-fit h-fit place-self-center text-lg">
                        <h2 className="text-title-col text-center text-xl underline">{props.title}</h2>
                        <div className="text-text-col p-2">{props.text}</div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Article