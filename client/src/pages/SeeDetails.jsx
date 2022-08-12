// ! REACT HOOKS :

import { useState, useEffect } from "react";

// ! REACT ROUTER :

import { useParams, Link } from 'react-router-dom';

// ! COMPONENTS :

import NavBar from "../componenents/NavBar";
import ComicsDetail from "../componenents/ComicsDetail";

// ! REQUEST FUNCTIONS :

import { FetchSupeById } from "../utils/FetchRequests";

// ! CSS :

import "./SeeDetails.css";

// ! VARIABLES:

const ThumbnailStandardSize = "/standard_fantastic";

const SeeDetails = ({ UserInput, setUserInput}) => {

    let id = useParams().HeroId;

    console.log("ID" + id);

    const [ SupeDetails, setSupeDetails ] = useState();


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


    // ---------------------------------------------------------------------- //

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
                                <span>Latest Update : {SupeDetails[0].modified}</span>
                            </div>
                            <div className="ComicsContainer">  {/*{ITEM 3 (grid)}*/}
                                <h2>Latest Comics</h2>
                                {/* <ComicsDetail ComicsName={SupeDetails[0].comics.items[0].name} ComicsPrice={SupeDetails[0].comics.items[0].prices[0].price} ComicsDate={SupeDetails[0].comics.items[0].dates[0].date}/> */}
                            </div>
							<div className="SeriesContainer">
								<h2>Latest Series</h2>
								{SupeDetails[0].series.items.map(item => (
									<ul>
										<li>{item.name}</li>
									</ul>
								))}
								{SupeDetails[0].series.items.length === 0 ? (<li>No series available</li>) : (<p></p>)}
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
