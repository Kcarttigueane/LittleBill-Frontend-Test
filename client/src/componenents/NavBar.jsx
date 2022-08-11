import { useState } from "react";

import "./NavBar.css"

// MARVEL LOGO :
import Logo from "../images/Marvel_Logo.png"

const NavBar = ({ setUserInput }) => {

    const [searchBarInput, setSearchBarInput] = useState("");

    const submitFormHandler = (event) => {
        event.preventDefault();

        if (searchBarInput.trim() === "") {
            return;
        }
        setUserInput(searchBarInput);
        setSearchBarInput("");
    }

    return (
        <div className="nav-bar-container">
            <img src={Logo} alt="Marvel Logo"></img>
            <form onSubmit={submitFormHandler}>
                <input
                    type="text"
                    placeholder="Search"
                    value={searchBarInput}
                    onChange={(e) => setSearchBarInput(e.target.value)}
                ></input>
                <button
                    type="submit">Submit
                </button>
            </form>
        </div>
    )
}

export default NavBar
