import "./SeriesDetails.scss";

const SeriesDetails = ({ SupeSeriesDetails }) => {
    return (
        <div className="SeriesContainer">
            <h2>Latest Series</h2>
            {SupeSeriesDetails && (
                SupeSeriesDetails.map((element) => {
                    return (
                        <ul key={element.id}>
                            <li>
                                {element.title}
                                {element.rating && <span style={{ marginLeft:"25px", textDecoration:"underline"}}>Rating : {element.rating}</span>}
                            </li>
                        </ul>
                    )
                })
            )}
            {(!SupeSeriesDetails || SupeSeriesDetails.length === 0) && (<p>No Series available</p>)}
        </div>
    )
}

export default SeriesDetails
