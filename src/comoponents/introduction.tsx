import React from "react"
import {Fragment} from "react";

function Introduction(props: { title: string, img: any, alt: string, bg:boolean}){
    if(props.bg){
        return (
            <Fragment>
                <img src={require("../images/" + props.img)} alt={props.alt} className="object-cover h-screen"/>
                <div className="z-10 mt-80 absolute place-self-center h-36">
                    <div className="text-text-col text-4xl">
                        <h2 className="bg-body-col bg-opacity-50 p-4 rounded-xl">{props.title}</h2>
                    </div>
                </div>
            </Fragment>
        )
    } else {
        return (
            <Fragment>
                <img src={require("../images/" + props.img)} alt={props.alt} className="object-cover h-screen w-auto z-0 mt-0 "/>
                <div className="z-10 mt-80 absolute place-self-center h-36">
                    <div className="text-text-col text-4xl">
                        <h2 className="bg-body-col bg-opacity-50 p-4 rounded-xl md:bg-opacity-0">{props.title}</h2>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Introduction