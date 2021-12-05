import React, {useEffect, useState} from "react";
import { FormattedMessage } from "react-intl";
import Device from "./device";

function Devices(props)
{

    return(
        <table className="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">ID</th>
                <th scope="col"><FormattedMessage id="Device"/></th>
                <th scope="col"><FormattedMessage id="Value"/></th>
                </tr>
            </thead>
            <tbody>
                {props.devs.map((a,index)=>(<Device dev={a} key={"dev"+a.id} ind={index}/>))}
            </tbody>
        </table>
    );
}

export default Devices;