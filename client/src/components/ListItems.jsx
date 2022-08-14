// ! HOOKS :

import { useState, useEffect } from "react";

// ! MODULES :

import ReactPaginate from "react-paginate";
import { v4 as uuidv4 } from "uuid";

// ! COMPONENTS :

import SupeItem from "./SupeItem";

// ! SCSS :

import "./ListItems.scss";
import "../style/pagination.scss";

const ListItems = ({ Supes, setIsSeeDetailsOn, setSelectedSupe }) => {
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    const itemsPerPage = 8;

    useEffect(() => {
        if (Supes) {
            const endOffset = itemOffset + itemsPerPage;
            setCurrentItems(Supes.slice(itemOffset, endOffset));
            setPageCount(Math.ceil(Supes.length / itemsPerPage));
        }
    }, [itemOffset, itemsPerPage, Supes]);

    const handlePageClick = (event) => {
        if (Supes) {
            const newOffset = (event.selected * itemsPerPage) % Supes.length;
            setItemOffset(newOffset);
        }
    };

    return (
        <>
            <div className="ListItemContainer">
                {currentItems &&
                    currentItems.map((supes) => {
                        return (
                            <SupeItem
                                key={uuidv4()} // remettre avec l'id ou pas --> DOUTE
                                id={supes.id}
                                name={supes.name}
                                description={supes.description}
                                thumbnailPath={supes.thumbnail.path}
                                thumbnailExtension={supes.thumbnail.extension}
                                setIsSeeDetailsOn={setIsSeeDetailsOn}
                                setSelectedSupe={setSelectedSupe}
                            />
                        );
                    })}
                {currentItems.length === 0 && <h1>No results found</h1>}
            </div>
            {currentItems.length !== 0 && (
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
                    />
                </>
            )}
        </>
    );
};

export default ListItems;
