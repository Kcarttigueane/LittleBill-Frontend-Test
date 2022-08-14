// ! REACT HOOKS :

import { useState, useEffect } from "react";

// ! REQUEST FUNCTIONS :

import { FetchSupeById, FetchCharacterSeriesInfos, FetchCharacterComicsInfos} from "../utils/FetchRequests";

// ! COMPONENTS :

import ComicsDetail from "./ComicsDetail";
import SeriesDetails from "./SeriesDetails";
import ImageDescription from "./ImageDescription";

// ! CSS :

import "./SeeDetails.scss"

const SeeDetails = ({ HeroId, setIsSeeDetailsOn }) => {

    const [ SupeDetails, setSupeDetails ] = useState();
    const [ SupeSeriesDetails, setSupeSeriesDetails ] = useState();
    const [ SupeComicsDetails, setSupeComicsDetails ] = useState();

    useEffect(() => {
        FetchSupeById(HeroId)
            .then((res) => {
                setSupeDetails(res);
            })
            .catch((error) => {
                console.log(error.message);
            });
        FetchCharacterSeriesInfos(HeroId)
            .then((res) => {
                setSupeSeriesDetails(res);
            })
            .catch((error) => {
                console.log(error.message);
            });
        FetchCharacterComicsInfos(HeroId)
            .then((res) => {
                setSupeComicsDetails(res);
            })
            .catch((error) => {
                console.log(error.message);
        });
    }, []);

    // ---------------------------------------------------------------------- //

    const BackToResultHandler = event => {
        event.preventDefault();
        setIsSeeDetailsOn(false);
    };

    return (
        <>
            <button onClick={BackToResultHandler} className="BackToResultBttn">
                    Back to result...
            </button>
            <div className="MainContainer">
                <div className="SeeDetailsContainer">
                    {SupeDetails ? (
                        <>
                            <ImageDescription SupeDetails={SupeDetails} />
                            <ComicsDetail SupeComicsDetails={SupeComicsDetails}/>  {/*{ITEM 3 (grid)}*/}
                            <SeriesDetails SupeSeriesDetails={SupeSeriesDetails}/>  {/*{ITEM 4 (grid)}*/}
                        </>
                    ) : (
                        <h1>Loading...</h1> // center this element
                    )}
                </div>
            </div>
        </>
    )
};

export default SeeDetails;
