import { Link } from 'react-router-dom';

import "./SuperItem.css";

const ThumbnailSize = "/portrait_medium";
const ImageFormat = ".jpg";

function getWordStr(str) {
    return str.split(/\s+/).slice(0, 10).join(" ");
}

const SuperItem = (props) => {
    console.log("PROPS" + props);

    let { id, name, description, thumbnail } = props;

    thumbnail = thumbnail + ThumbnailSize + ImageFormat;

    description = getWordStr(description) + "...";

    return (
        <div className="SuperItemContainer">
            <img src={thumbnail} alt={name}/>
            <h3>{name}</h3>
            <p>{description.substring(0, 150)}</p>
            <button>More Details...</button>
        </div>
    )
}

export default SuperItem;
