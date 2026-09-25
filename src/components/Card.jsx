import "./css/card.css" ;


export default function Card({car}){

    return(
        <>
            <article className="car-card">
            <div className="car-image">
                <div className="car-badge">{car.carCondition}</div>

                <div className="car-placeholder">
                🚗
                </div>
            </div>

            <div className="car-content">
                <div className="car-header">
                <div>
                    <p className="car-brand">{car.name}</p>
                    <h2>{car.model}</h2>
                </div>

                    <p className="car-price">
                        ${car.price.toLocaleString()}
                    </p>
                </div>

                <div className="car-details">
                    <span>📅 {car.year}</span>
                    <span>⚙️ {car.transmission}</span>
                    <span>⛽ {car.fuelType}</span>
                    <span>🛣️ {car.mileAge.toLocaleString()} km</span>
                </div>

                    <p className="car-description">
                    {car.description}
                    </p>

                <div className="car-footer">
                    <span>{car.Color}</span>

                    <button>
                        View Details →
                </button>
                </div>
            </div>
            </article>
        </>
    )
}