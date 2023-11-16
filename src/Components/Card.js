export default function Card(props) {
    return (
    <div>
        <img src={props.img} alt="img" />
        <h1>{props.tilte}</h1>
    </div>
    );
}