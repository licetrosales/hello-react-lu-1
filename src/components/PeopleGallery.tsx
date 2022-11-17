//Komponentname + "Props"
import GreetingsComponent from "./GreetingsComponent";
import "./PeopleGallery.css"

type PeopleGalleryProps = {
    nameList: string[]
}

export default function PeopleGallery(props: PeopleGalleryProps) {
    //Wir erstellen eine Liste con Komponenten mit den Namen
    const peopleComponents = props.nameList.map((personsName, index) => {
            return <GreetingsComponent nameToGreet={personsName} key={index}/>

        }
    );
    // Wir brauchen auf jeden Fall ein "HTML" -ish Elternelement
    return (
        <div className={"PeopleGallery"}>
            {peopleComponents}
        </div>
    );
}