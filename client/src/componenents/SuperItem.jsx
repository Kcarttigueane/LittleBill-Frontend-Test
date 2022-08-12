import { Link } from 'react-router-dom';

import "./SuperItem.css";

const ThumbnailSize = "/portrait_medium";

function getWordStr(str) {
    return str.split(/\s+/).slice(0, 21).join(" ");
}

const SuperItem = (props) => {

    let { id, name, description, thumbnailPath, thumbnailExtension } = props;

    thumbnailPath = thumbnailPath + ThumbnailSize + "." + thumbnailExtension;

    description = getWordStr(description) + "...";


    // ------------------------------------------------------------------- //

    return (
        <div className="SuperItemContainer">
            <img src={thumbnailPath} alt={name}/>
            <h3>{name}</h3>
            <p>{description.substring(0, 150)}</p>

            <button>
                <Link to={`/${id}`}>More Details...</Link>
            </button>
        </div>
    )
}

export default SuperItem;
