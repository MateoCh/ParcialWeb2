import React from "react";

function Device(props)
{
    return(
        <tr>
            <th scope="row">{props.ind+1}</th>
            <td>{props.dev.id}</td>
            <td>{props.dev.name}</td>
            <td>{""+props.dev.desired.value}</td>
        </tr>
    );
}

export default Device;