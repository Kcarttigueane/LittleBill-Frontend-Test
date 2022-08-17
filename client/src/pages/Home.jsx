import { useState, useEffect } from "react";

// ! COMPONENTS :

import NavBar from "../components/NavBar";
import ListItems from "../components/ListItems";
import SeeDetails from "../components/SeeDetails";
import RatingSystem from "../components/RatingSystem";

// ! CSS :

import "../style/pagination.scss";

// ! FUNCTIONS :

import { FetchSupesNameStartWith } from "../utils/FetchRequests";

// ! INITIAL DATA :

import InitialSupeData from "../utils/InitialSupeData.json";

const Home = () => {
    const [UserInput, setUserInput] = useState("");
    const [Supes, setSupes] = useState(InitialSupeData);

    const [IsSeeDetailsOn, setIsSeeDetailsOn] = useState(false);
    const [isRatingSytemOn, setIsRatingSytemOn] = useState(false);
    const [SelectedSupe, setSelectedSupe] = useState();

    useEffect(() => {
        if (UserInput.trim() !== "") {
            FetchSupesNameStartWith(UserInput)
                .then((res) => {
                    setSupes(res);
                })
                .catch((error) => {
                    console.log(error.message);
                });
        }
        setUserInput("");
    }, [UserInput]);

    return (
        <>
            <NavBar
                setUserInput={setUserInput}
                setIsSeeDetailsOn={setIsSeeDetailsOn}
                setIsRatingSytemOn={setIsRatingSytemOn}
                setSupes={setSupes}
            />
            {isRatingSytemOn ? (
                <RatingSystem setIsRatingSytemOn={setIsRatingSytemOn} />
            ) : (
                <>
                    {!IsSeeDetailsOn ? (
                        <ListItems
                            Supes={Supes}
                            setIsSeeDetailsOn={setIsSeeDetailsOn}
                            setSelectedSupe={setSelectedSupe}
                        />
                    ) : (
                        <SeeDetails
                            HeroId={SelectedSupe}
                            setIsSeeDetailsOn={setIsSeeDetailsOn}
                        />
                    )}
                </>
            )}
        </>
    );
};

export default Home;
