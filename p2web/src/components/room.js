import React from "react";

function Room(props)
{
    // let imSrc=props.room.type.includes("room")?"https://www.nicepng.com/png/detail/185-1858568_comfort-icon-bedroom-icon.png":"https://st4.depositphotos.com/17982118/20634/v/1600/depositphotos_206349432-stock-illustration-icon-kitchen-vector.jpg";
    return(
        <div className="col">
            <div className="card m-1">
                <h5 className="card-title" onClick={()=>props.updateSelected(props.room)}>{props.room.name}</h5>
                <img className="card-img-top" src={require(props.room.type.includes("room")?'../imgs/room.png':'../imgs/kitchen.png').default} alt="Lugar" onClick={()=>props.updateSelected(props.room)}/>
            </div>
        </div>
    )
}

export default Room;