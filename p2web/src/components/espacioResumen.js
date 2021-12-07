import React from "react";

function EspacioResumen(props)
{
    return(
        <div className="col" onClick={()=>props.updateSelected(props.place)}>
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