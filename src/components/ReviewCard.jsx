function ReviewCard({ review }) {


    return (
        <>
            <div className="card" >
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Nome: {review.name}</li>
                    <li className="list-group-item">Voto: {review.vote}</li>
                    <li className="list-group-item">{review.text}</li>
                </ul>
            </div>
        </>
    )
};

export default ReviewCard;