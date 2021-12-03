import React, {useCallback, useEffect, useState} from "react";
import { FormattedDate } from "react-intl";
import Devices from "./devices";
import Room from "./room";

function EspacioDetail(props)
{
    const [rooms,setRooms]=useState([]);
    const [selectedRoom, setSelectedRoom]=useState({});
    const url= "https://gist.githubusercontent.com/josejbocanegra/92c90d5f2171739bd4a76d639f1271ea/raw/9effd124c825f7c2a7087d4a50fa4a91c5d34558/rooms.json";
    useEffect(()=>{
        fetch(url).then(res=>res.json()).then(data=>{
            let allRooms = [...data];
            console.log("placeid",  props.place.id);
            allRooms.forEach(a=>{
                console.log("homeid", a.homeId);
                console.log("comparison", a.homeId.localeCompare(props.place.id)!==0);
            })
            let placeRooms = [...allRooms].filter(a=>a.homeId.localeCompare(props.place.id)===0);
            console.log(placeRooms);
            setRooms([...placeRooms]);
        })
    },[]);
    return(
        <div className="row">
            <h2>My rooms</h2>
            <div className="row">
                <div className="col-8">
                    <div className="row">
                        {rooms.map(a=><Room key={"r"+a.id} room={a} updateSelected={setSelectedRoom}/>)}
                    </div>
                </div>
                <div className="col-4">
                    {selectedRoom?.name?(<Devices key={"d"+selectedRoom.id} devs={selectedRoom.devices} />):null}
                </div>
            </div>
        </div>
    )
}

export default EspacioDetail;