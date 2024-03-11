import billede from "../assets/blomsterbillede.jpg"
export default function Hej(props) {

    return (
        <div>
        <h2>Hej, {props.navn}. Du er {props.alder} år:-)</h2>
        <img src={billede} alt="Billede af blomster"/>
        </div>
    )
}