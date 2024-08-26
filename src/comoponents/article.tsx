import React from "react"

function Article(props: { title: string , text: string, img: string, imgleft: boolean, alt:string }){
    if(props.imgleft) {
        return(
            <div className="mx-40 z-50 mt-10">
                <div className="h-min grid grid-cols-2 bg-gradient-to-br from-shade-primary to-shade-secondary p-4 rounded-lg">
                    <img src={require("../images/" + props.img)} alt={props.alt} className="rounded h-fit place-self-start max-h-96"/>
                    <div className="p-4 rounded w-fit h-fit place-self-center">
                        <h2 className="text-title-col text-lg underline">{props.title}</h2>
                        <div className="text-text-col p-2">{props.text}</div>
                    </div>
                </div>
            </div>
        )
    }else {
        return (
            <div className="mx-40 z-50 mt-10">
                <div
                    className="h-min grid grid-cols-2 bg-gradient-to-bl from-shade-secondary to-shade-primary p-4 rounded-lg">
                    <div className="p-4 rounded w-fit h-fit place-self-center">
                        <h2 className="text-title-col text-lg underline">{props.title}</h2>
                        <div className="text-text-col p-2">{props.text}</div>
                    </div>
                    <img src={require("../images/" + props.img)} alt={props.alt}
                         className="rounded h-fit place-self-end max-h-96"/>
                </div>
            </div>
        )
    }
}

export default Article