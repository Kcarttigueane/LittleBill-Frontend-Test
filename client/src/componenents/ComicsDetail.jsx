import "./ComicsDetail.css";

const ComicsDetail = ({ ComicsName, ComicsPrice, ComicsDate }) => {
    return (
        <div>
            <h1>{ComicsName}</h1>
            <p>{ComicsPrice}</p>
            <p>{ComicsDate}</p>
        </div>
    )
}

export default ComicsDetail;
