//Namengebung = Großgeschrieben, genau sowie der Dateiname
//() = Können Parameter benutzen = In React nnent sich das Props
import {useState} from "react";

export default function StateExampleComponent(){

    //CHANGE DETECTION führt dazu das new gerendert wird
    //"to render" zu Deutsch
    // In React nutzen wir dazu "State"
    // "state" z. Deutsch: Status

    // Unser State um croissantCounter zu verfolgen
    // useState gibt uns auf der ersten Stelle den aktuellen Wert
    // d.h. croissantCounter
    //Un d an zweiter Stelle eine Funktion, um den State zu verändern
    // d.h. setCroissantCounter
    // Schreibweise des Setters = set<StateName>

    const [croissantCounter, setCroissantCounter]= useState(0);



    function eatCroissant(){
        console.log("Mmmm ein leckeres  😄 donut")
        const newCroissantCounter = croissantCounter +1;
        setCroissantCounter(newCroissantCounter);
        console.log(croissantCounter)
    }

    function redudeCroissant(){
        console.log("!!!  🤨 donut")
        const newCroissantCounter = croissantCounter -1;
        setCroissantCounter(newCroissantCounter);
        console.log(croissantCounter)
    }

    //Runde Klammer MUSS in return Zeile sein, weil sonst
    //*unreachable code after return statatment

    return (
    <div>
        So viele Donuts haber wir gegessen: {croissantCounter}
        <br/>
        <br/>
        <button onClick={eatCroissant}>🦁 essen</button>
        <button onClick={redudeCroissant}>🦁 reduzieren </button>
    </div>);
}