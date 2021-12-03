import React, {useEffect, useState} from "react";
import PeliculaResumen from "./peliculaResumen";
import PeliculaDetail from "./peliculaDetail";

function ListadoPeliculas()
{
    const [peliculas, setPeliculas] = useState([]);
    const [peliculaAct, setPeliculaAct]=useState({});
    const [len, setLen] = useState("en");
    const urlEs ="https://gist.githubusercontent.com/josejbocanegra/f784b189117d214578ac2358eb0a01d7/raw/2b22960c3f203bdf4fac44cc7e3849689218b8c0/data-es.json";
    const urlEn ="https://gist.githubusercontent.com/josejbocanegra/8b436480129d2cb8d81196050d485c56/raw/48cc65480675bf8b144d89ecb8bcd663b05e1db0/data-en.json";
    useEffect(()=>{
        setLen(navigator.language.toLowerCase());
        if(!navigator.onLine)
        {
            if(localStorage.getItem("peliculas")===null)
            {
            }
            else{
                let pels =JSON.parse(localStorage.getItem("peliculas"));
                setPeliculas([...pels]);
            }
        }
        else{
            let url=navigator.language.toLowerCase().includes("es")?urlEs:urlEn;
            fetch(url).then(response=>response.json()).then(data=>{
                let test=[{"id": 1,"name": "Casablanca","directedBy": "Michael Curtiz","country": "Estados Unidos","budget": 1,"views": 1256000,"releaseDate": "1942-05-01","description": "Casablanca es una película dramática romántica estadounidense de 1942 dirigida por Michael Curtiz basada en la obra teatral de Murray Burnett y Joan Alison Everybody Comes to Rick\'s. La película está protagonizada por Humphrey Bogart, Ingrid Bergman y Paul Henreid; también presenta a Claude Rains, Conrad Veidt, Sydney Greenstreet, Peter Lorre y Dooley Wilson. Ambientada durante la Segunda Guerra Mundial, se centra en un expatriado estadounidense que debe elegir entre su amor por una mujer y ayudarla a ella y a su esposo, un líder de la resistencia checa, a escapar de la ciudad de Casablanca controlada por Vichy para continuar su lucha contra los nazis.","cast": "Humphrey Bogart, Ingrid Bergman y Paul Henreid","poster": "https://i.imgur.com/eM1Kkri.jpg"},{"id": 2,"name": "El abrazo de la serpiente","directedBy": "Ciro Guerra","country": "Colombia","budget": 2,"views": 7256000,"releaseDate": "2015-12-23","description": "El abrazo de la serpiente es una película dramática de aventuras coproducida internacionalmente en 2015 dirigida por Ciro Guerra y escrita por Guerra y Jacques Toulemonde Vidal. Rodada casi en su totalidad en blanco y negro, la película sigue dos viajes separados por treinta años por el chamán indígena Karamakate en la selva amazónica colombiana, uno con Theo, un etnógrafo alemán, y el otro con Evan, un botánico estadounidense, ambos de los cuales están buscando la rara planta yakruna. Se inspiró en los diarios de viaje de Theodor Koch-Grunberg y Richard Evans Schultes, y se dedicó a las culturas amazónicas perdidas.","cast": "Nilbio Torres, Antonio Bolívar, Jan Bijvoet, Brionne Davis y Luigi Sciamanna","poster": "https://i.imgur.com/5evik9m.jpg"}];
                console.log(data);
                localStorage.setItem("peliculas", JSON.stringify(data));
                setPeliculas([...data]);
            });
        }
    },[])

    function updatePelAct(pelAct)
    {
        setPeliculaAct({...pelAct});
    }
    return(
        <div className="row">
            <div className="col-9">
                {navigator.onLine?(<h2>Estás en linea, disfruta la página :D </h2>):(<h2>Oops, te has desconectado, pero mientras disfruta de lo previamente cargado :D</h2>)}
                <table className="table table-striped">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Directed by</th>
                        <th scope="col">Country</th>
                        <th scope="col">Budget</th>
                        <th scope="col">Release</th>
                        <th scope="col">Views</th>
                        </tr>
                    </thead>
                    <tbody>
                        {peliculas.length>0?(peliculas.map(act=><PeliculaResumen key={act.id} mov={act} upPel={updatePelAct}/>)):null}
                    </tbody>
                </table>
            </div>
            <div className="col-3">
                {peliculaAct?.name?(<PeliculaDetail key={"d"+peliculaAct.id} mov={peliculaAct}/>):null}
            </div>  
        </div>
    )
}

export default ListadoPeliculas;