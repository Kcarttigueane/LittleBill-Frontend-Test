import { v4 as uuidv4 } from "uuid";

// ! HOOKS :

import { useState, useEffect } from "react";
import ReactPaginate from 'react-paginate';

// ! CSS :

import "./Dashboard.css";
import "../componenents/Pagination.css";

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


    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    const itemsPerPage = 8;

    useEffect(() => {
        if (Supes) {
            const endOffset = itemOffset + itemsPerPage;
            console.log(`Loading items from ${itemOffset} to ${endOffset}`);
            setCurrentItems(Supes.slice(itemOffset, endOffset));
            setPageCount(Math.ceil(Supes.length / itemsPerPage));
        }
    }, [itemOffset, itemsPerPage, Supes]);

    const handlePageClick = (event) => {
        if (Supes) {
            const newOffset = (event.selected * itemsPerPage) % Supes.length;
            console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
            );
            setItemOffset(newOffset);
        }
    };

    return (
        <>
            <NavBar setUserInput={setUserInput} />
            <div className="dashboard-container">
                {currentItems && (currentItems.map((supes) => {
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
                }))}
                {currentItems.length === 0 && (<h1>No results found</h1>)}
            </div>
            {currentItems.length !== 0 &&
                <>
                <ReactPaginate
                    breakLabel="..."
                    nextLabel=">"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    pageCount={pageCount}
                    previousLabel="<"
                    renderOnZeroPageCount={null}

                    containerClassName="pagination"
                    pageLinkClassName="pageNum"
                    previousLinkClassName="pageNum"
                    nextLinkClassName="pageNum"
                    activeLinkClassName="activePageNum"
                /></>}
        </>
    );
}

export default Dashboard;









// Timestamp Request and Timestamp Reply query messages provide the
// ability to determine the length of time that ICMP query messages
// spend in transit, which is extremely useful for measuring the
// latency across a specific network.

// The MD5 hash function was originally designed for use as a
// secure cryptographic hash algorithm for authenticating
// digital signatures.
