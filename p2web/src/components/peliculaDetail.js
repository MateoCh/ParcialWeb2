import React, {useEffect, useState} from "react";
import "./peliculaDetail.css";
function PeliculaDetail(props)
{
    return(
        <div className="card">
            <img src={props.mov.poster} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h4>{props.mov.name}</h4>
                <p className="card-text">{props.mov.description}</p>
                <p className="card-text"><strong>Cast: {props.mov.cast}</strong></p>
            </div>
        </div>
    )
}

export default PeliculaDetail;