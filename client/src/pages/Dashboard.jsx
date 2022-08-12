import md5 from "crypto-js/md5";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

// ! HOOKS :

import { useState, useEffect } from "react";

// ! CSS :

import "./Dashboard.css";

// ! COMPONENTS :

import NavBar from "../componenents/NavBar";
import SuperItem from "../componenents/SuperItem";

// ! FUNCTIONS :

import { FetchSupesNameStartWith }  from "../utils/FetchRequests";

const Dashboard = ({ UserInput, setUserInput}) => {

    const [Supes, setSupes] = useState();

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
        <NavBar setUserInput={setUserInput} />
        <div className="dashboard-container">
            {Supes ? (Supes.map((supes) => {
                return (
                    <SuperItem
                        key={uuidv4()} // remettre avec l'id ou pas --> DOUTE
                        id={supes.id}
                        name={supes.name}
                        description={supes.description}
                        thumbnailPath={supes.thumbnail.path}
                        thumbnailExtension={supes.thumbnail.extension}
                    />
                );
            }))
            :
                (<div>No Result found</div>)
            }
        </div>
        </>
    );
};

export default Dashboard;









// Timestamp Request and Timestamp Reply query messages provide the
// ability to determine the length of time that ICMP query messages
// spend in transit, which is extremely useful for measuring the
// latency across a specific network.

// The MD5 hash function was originally designed for use as a
// secure cryptographic hash algorithm for authenticating
// digital signatures.
