import React, {useEffect, useState} from "react";
import { FormattedDate } from "react-intl";

function EspacioResumen(props)
{
    let imSrc=props.place.type.includes("house")?"https://image.shutterstock.com/image-vector/home-icon-isolated-vector-illustration-260nw-1662296311.jpg":"https://cdn-icons-png.flaticon.com/512/75/75051.png";
    return(
        <div className="col">
            <div className="card m-1 h-100">
                <img className="card-img-top" src={require(props.place.type.includes("house")?'../imgs/house.png':'../imgs/loft.png').default} alt="Lugar" onClick={()=>props.updateSelected(props.place)}/>
                <div className="card-body">
                    <h5 className="card-title" onClick={()=>props.updateSelected(props.place)}>{props.place.name}</h5>
                    <p className="card-text" onClick={()=>props.updateSelected(props.place)}>{props.place.address}</p>
                </div>
            </div>
        </div>
    )
}

export default EspacioResumen;