import "./cards.scss"

function Card(props) {
    return (
        <div className="card" {...props}>
            {props.children}
        </div>
    )
}

export default Card