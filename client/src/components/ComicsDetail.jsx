import "./ComicsDetail.scss";

const ComicsDetail = ({ SupeComicsDetails }) => {


    return (
        <div className="ComicsContainer">  {/*{ITEM 3 (grid)}*/}
            <h2>Latest Comics</h2>
            {SupeComicsDetails &&  (
                SupeComicsDetails.map((element) => {
                    return (
                        <ul key={element.id}>
                            <li>
                                <h4>{element.title}</h4>
                                <ul>
                                    {element.dates && <li>On sale Date : {element.dates[0].date.split('T')[0].split('-').reverse().join('-')}</li>} {/* en faire une fonction a part*/}
                                    {element.prices && <li>Prices : ${element.prices[0].price}</li>}
                                </ul>
                            </li>
                        </ul>
                    )
                })
            )}
            {(!SupeComicsDetails || SupeComicsDetails.length === 0) && (<p>No Comics available</p>)}
        </div>
    );
}

export default ComicsDetail;
