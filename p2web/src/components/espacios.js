import React, {useEffect, useState} from "react";
import EspacioDetail from "./espacioDetail";
import EspacioResumen from "./espacioResumen";
import { FormattedMessage } from "react-intl";

function Espacios()
{
    const [espacios, setEspacios] = useState([]);
    const [selectedEspacio, setSelectedEspacio]=useState([]);
    const url ="https://gist.githubusercontent.com/josejbocanegra/0067d2b28b009140fee423cfc84e40e6/raw/6e6b11160fbcacb56621b6422684d615dc3a0d33/spaces.json";
    useEffect(()=>{
        if(!navigator.onLine)
        {
            if(localStorage.getItem("espacios")===null)
            {
            }
            else{
                let esps =JSON.parse(localStorage.getItem("espacios"));
                setEspacios([...esps]);
            }
        }
        else{
            fetch(url).then(response=>response.json()).then(data=>{
                localStorage.setItem("espacios", JSON.stringify(data));
                setEspacios([...data]);
            });
        }
    },[])

    return(
        <div className="container">
            <div className="row">
                <h2><FormattedMessage id="MySpaces"/></h2>
                {/* {navigator.onLine?(<h2>Estás en linea, disfruta la página :D </h2>):(<h2>Oops, te has desconectado, pero mientras disfruta de lo previamente cargado :D</h2>)} */}
                <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
                    {espacios.map(a=>(<EspacioResumen place={a} key={a.id} updateSelected={setSelectedEspacio}/>))}
                </div>
            </div>
            <div className="row">
                {selectedEspacio?.id?(<EspacioDetail place={selectedEspacio} key={"se"+selectedEspacio.id} />):null}
            </div>  
        </div>
    )
}

export default Espacios;