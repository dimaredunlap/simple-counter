import React from "react";

export default function Counter(props){
    const number = props.number || 0
    const places = number.toString().split("").reverse()
    console.log(places);

    return <div className="container">
        <div className="box"><i class="fas fa-clock"></i></div>
        <div className="box"><h1>{places.length > 5 ? places[5]: 0}</h1></div>
        <div className="box"><h1>{places.length > 4 ? places[4]: 0}</h1></div>
        <div className="box"><h1>{places.length > 3 ? places[3]: 0}</h1></div>
        <div className="box"><h1>{places.length > 2 ? places[2]: 0}</h1></div>
        <div className="box"><h1>{places.length > 1 ? places[1]: 0}</h1></div>
        <div className="box"><h1>{places[0]}</h1></div>
    </div>
}

