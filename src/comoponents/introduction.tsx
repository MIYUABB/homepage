import React from "react"
import {Fragment} from "react";

function Introduction(props: { title: string, img: any, alt: string}){
    console.log(props.img)
    return (
        <Fragment>
            <img src={require("../images/" + props.img)} alt={props.alt} className="h-full w-auto z-0 mt-0"/>
            <div className="z-50 mt-80 absolute place-self-center h-36">
                <div className="text-text-col text-4xl">
                    <h2 className="">{props.title}</h2>
                </div>
            </div>
        </Fragment>
    )
}

export default Introduction