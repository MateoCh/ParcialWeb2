import React, {useEffect, useState} from "react";
import { FormattedDate } from "react-intl";

function PeliculaResumen(props)
{
    return(
        <tr>
            <th scope="row">{props.mov.id}</th>
            <td onClick={()=>{props.upPel(props.mov)}}>{props.mov.name}</td>
            <td>{props.mov.directedBy}</td>
            <td>{props.mov.country}</td>
            <td>{props.mov.budget}</td>
            <td>
                <FormattedDate
                    value={new Date(props.mov.releaseDate)}
                    year="numeric"
                    month="long"
                    day="numeric"
                />
            </td>
            <td>{props.mov.views}</td>
        </tr>
    )
}

export default PeliculaResumen;