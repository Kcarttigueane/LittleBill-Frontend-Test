// ! REACT HOOKS :

import { useState, useEffect } from "react";

// ! REACT ROUTER :

import { useParams, Link } from 'react-router-dom';

// ! COMPONENTS :

import NavBar from "../componenents/NavBar";
import ComicsDetail from "../componenents/ComicsDetail";

// ! REQUEST FUNCTIONS :

import { FetchSupeById, FetchCharacterSeriesInfos, FetchCharacterComicsInfos} from "../utils/FetchRequests";

// ! CSS :

import "./SeeDetails.css";

// ! VARIABLES:

const ThumbnailStandardSize = "/detail";

const SeeDetails = ({ UserInput, setUserInput}) => {

    let id = useParams().HeroId;

    const [ SupeDetails, setSupeDetails ] = useState();
    const [ SupeSeriesDetails, setSupeSeriesDetails ] = useState();
    const [ SupeComicsDetails, setSupeComicsDetails ] = useState();

    useEffect(() => {
        FetchSupeById(id)
            .then((res) => {
                setSupeDetails(res);
                console.log({res});
            })
            .catch((error) => {
                console.log(error.message);
            });
    }, [id]);

    useEffect(() => {
        FetchCharacterSeriesInfos(id)
            .then((res) => {
                setSupeSeriesDetails(res);
            })
            .catch((error) => {
                console.log(error.message);
            });
        FetchCharacterComicsInfos(id)
            .then((res) => {
                setSupeComicsDetails(res);
            })
            .catch((error) => {
                console.log(error.message);
        });
    }, [SupeDetails]);

    // ---------------------------------------------------------------------- //

    if (SupeDetails) {
        console.log(SupeDetails[0].thumbnail.path + ThumbnailStandardSize + "." + SupeDetails[0].thumbnail.extension);
    }

    return (
        <>
            <NavBar setUserInput={setUserInput}/>
            <div className="MainContainer">
                <div className="SeeDetailsContainer">
                    {SupeDetails ? (
                        <>
                            <img src={SupeDetails[0].thumbnail.path + ThumbnailStandardSize + "." + SupeDetails[0].thumbnail.extension} alt={"fchgvjhb"}/>  {/*{ITEM 1 (grid)}*/}

                            <div className="SupeDetails">  {/*{ITEM 2 (grid)}*/}
                                <h1>{SupeDetails[0].name}</h1>
                                {SupeDetails[0].description ? (<p>{SupeDetails[0].description}</p>) : (<p>No description available</p>)}
                                <span>Latest Update : {SupeDetails[0].modified.split('T')[0].split('-').reverse().join('-')}</span>
                            </div>

                            <div className="ComicsContainer">  {/*{ITEM 3 (grid)}*/}
                                <h2>Latest Comics</h2>
                                {SupeComicsDetails ? (
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
                                ) : (<p>No series available</p>)}
                            </div>

							<div className="SeriesContainer">
								<h2>Latest Series</h2>
                                {SupeSeriesDetails ? (
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
                                )
                                :
                                (<p>No series available</p>)}
                            </div>
                        </>
                    ) : (
                        <h1>Loading...</h1> // center this element
                    )}
                </div>
                {/* <Link to="/">BACK TO RESULTS</Link> */}
            </div>
        </>
    )
}

export default SeeDetails
