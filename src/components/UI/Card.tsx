import './card.scss'

export const Card = (props:any) => {
    return (
        <div className="card">
        <div className="card__main">
            <img src={props.image} alt="image" />
            <div className="card__text">{props.title}</div>
        </div>
        </div>
    )
}