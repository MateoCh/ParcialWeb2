import React, {useEffect, useState} from "react";
import Device from "./device";

function Devices(props)
{

    return(
        <table class="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">ID</th>
                <th scope="col">Device</th>
                <th scope="col">Value</th>
                </tr>
            </thead>
            <tbody>
                {props.devs.map((a,index)=>(<Device dev={a} key={"dev"+a.id} ind={index}/>))}
            </tbody>
        </table>
    );
}

export default Devices;