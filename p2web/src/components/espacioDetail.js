import React, {useEffect, useState} from "react";
import Devices from "./devices";
import Room from "./room";
import PieChart from "./pieChart";
import { FormattedMessage } from "react-intl";

function EspacioDetail(props)
{
    const [rooms,setRooms]=useState([]);
    const [selectedRoom, setSelectedRoom]=useState({});
    const [pwrUsage, setPwrUsage]=useState([]);
    const url= "https://gist.githubusercontent.com/josejbocanegra/92c90d5f2171739bd4a76d639f1271ea/raw/9effd124c825f7c2a7087d4a50fa4a91c5d34558/rooms.json";
    useEffect(()=>{
        let localStorageId="habitaciones"+props.place.id;
        if(!navigator.onLine)
        {
            if(localStorage.getItem(localStorageId)===null)
            {
            }
            else{
                let rms =JSON.parse(localStorage.getItem(localStorageId));
                setRooms([...rms]);
                let pwrs = [...rms].map(a=>{
                    let obj = {};
                    obj.value=a.powerUsage.value;
                    obj.name=a.name;
                    return obj;
                });
                setPwrUsage([...pwrs]);
            }
        }
        else{
            fetch(url).then(res=>res.json()).then(data=>{
                let allRooms = [...data];
                let placeRooms = [...allRooms].filter(a=>a.homeId.localeCompare(props.place.id)===0);
                localStorage.setItem(localStorageId, JSON.stringify(placeRooms));
                setRooms([...placeRooms]);
                let pwrs = [...placeRooms].map(a=>{
                    let obj = {};
                    obj.value=a.powerUsage.value;
                    obj.name=a.name;
                    return obj;
                });
                setPwrUsage([...pwrs]);
            });
        }
    },[]);

    return(
        <div className="row">
            <h2><FormattedMessage id="MyRooms"/></h2>
            <div className="row">
                <div className="col-6">
                    <div className="row row-cols-1 row-cols-md-3 row-cols-lg-3 g-4">
                        {rooms?.map((a,index)=><Room key={"r"+a.homeId+""+index} room={a} updateSelected={setSelectedRoom}/>)}
                    </div>
                </div>
                <div className="col-6">
                    {selectedRoom?.name?(<Devices key={"d"+selectedRoom.homeId} devs={selectedRoom.devices} />):null}
                </div>
            </div>
            <div className="row justify-content-center">
                {(pwrUsage?.length>0)?(<PieChart key={"pc"+selectedRoom.homeId} data={pwrUsage}/>):null}
            </div>
        </div>
    )
}

export default EspacioDetail;