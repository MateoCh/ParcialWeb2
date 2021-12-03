import React, {useEffect, useState} from "react";
import { FormattedDate } from "react-intl";

function Room(props)
{
    let imSrc=props.room.type.includes("room")?"https://www.nicepng.com/png/detail/185-1858568_comfort-icon-bedroom-icon.png":"https://st4.depositphotos.com/17982118/20634/v/1600/depositphotos_206349432-stock-illustration-icon-kitchen-vector.jpg";
    return(
        <div className="card col-3">
            <h5 className="card-title" onClick={()=>props.updateSelected(props.room)}>{props.room.name}</h5>
            <img className="card-img-top" src={imSrc} alt="Lugar" onClick={()=>props.updateSelected(props.room)}/>
        </div>
    )
}

export default Room;