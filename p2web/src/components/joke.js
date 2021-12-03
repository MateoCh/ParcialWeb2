import { useEffect, useState } from "react";

function Joke()
{
    const url="https://api.chucknorris.io/jokes/random";
    const [joke, setJoke]=useState("");
    useEffect(()=>{
        if(!navigator.onLine)
        {
            if(localStorage.getItem("joke")===null)
            {
                setJoke("Loading...");
            }
            else{
                setJoke(localStorage.getItem("joke"));
            }
        }
        else
        {
            fetch(url).then(res=>res.json()).then(data=>
                {
                    console.log(data);
                    localStorage.setItem("joke",data.value);
                    setJoke(data.value);
                });
        }
    },[])

    return(
        <div>
            <h4>{joke}</h4>
        </div>
    )
}

export default Joke;