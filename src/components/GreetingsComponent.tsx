// <KomponentenName> + "Props"
type GreetingsComponenProps = {
    nameToGreet: string
}


//props = Requisiten
//Übergabeparameter für unsere Komponenten
//In React nennen wir den (fast) immer props

export default function GreetingsComponent(props: GreetingsComponenProps) {
    return (

        // Wen wir {} (geschweiifte Klammern in return verwenden,
        // können wir JS ausfühen
        <h3> Hallo ... {props.nameToGreet} </h3>
    );
}