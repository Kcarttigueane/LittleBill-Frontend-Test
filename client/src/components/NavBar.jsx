// ! HOOKS :

import { useState } from "react";

// ! SCSS :

import "./NavBar.scss";

// ! MARVEL LOGO :

import Logo from "../images/Marvel_Logo.png";

// * ====================================================================== *//

const NavBar = ({ setUserInput, setIsSeeDetailsOn, setIsRatingSytemOn }) => {
    const [SearchBarInput, setSearchBarInput] = useState("");

    const submitFormHandler = (event) => {
        event.preventDefault();

        if (SearchBarInput.trim() === "") {
            return;
        }
        setUserInput(SearchBarInput);
        setIsSeeDetailsOn(false);
        setSearchBarInput("");
    };

    const RatingSystemButtonHandler = (event) => {
        event.preventDefault();
        setIsRatingSytemOn(true);
    }

    return (
        <div className="nav-bar-container">
            <img src={Logo} alt="Marvel Logo"></img>
            <button onClick={RatingSystemButtonHandler} className="ratingSystemButton">Rating System Info</button>
            <form onSubmit={submitFormHandler}>
                <input
                    type="text"
                    placeholder="Search"
                    value={SearchBarInput}
                    onChange={(e) => setSearchBarInput(e.target.value)}
                ></input>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default NavBar;
