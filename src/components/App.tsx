import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import HelloComponent from "./HelloComponent";
import GreetingsComponent from "./GreetingsComponent";
import PeopleGallery from "./PeopleGallery";

//Komponente die "App" heißt

function App() {

    // Hier wird "Logik betrieben"
    //Hier gilt reines Typescript
    //werden in .tsx Dateien gespeichert

    const myName = "Lice";
    const myTeam = [
        "Person 1",
        "Person 2",
        "Person 3",
        "Person 4",
        "Person 5",
        "Person 6",
        "Person 7",
        "Person 8",
    ]
    const myTeamComponents = myTeam.map((personsName, index) => {
        return <GreetingsComponent nameToGreet={personsName} key={index}/>
    })

    return (

        <div className="App">
            <HelloComponent/>

            {/* Bei strings braucht man keine geschweiften Klammern*/}
            <GreetingsComponent nameToGreet={"Sam"}/>
            <GreetingsComponent nameToGreet={"Mathias"}/>
            <GreetingsComponent nameToGreet={myName}/>
            <GreetingsComponent nameToGreet={myTeam[0]}/>
            {myTeamComponents}

            <PeopleGallery nameList={myTeam}/>
        </div>
    );
}

export default App;
