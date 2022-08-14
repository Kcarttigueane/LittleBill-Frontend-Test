import "./SupeItem.scss";

import { ThumbnailFullSizePath as ImageSize } from "../utils/ConstantData";

function getWordStr(str) {
    return str.split(/\s+/).slice(0, 15).join(" ");
}

const SupeItem = (props) => {
    let {
        id,
        name,
        description,
        thumbnailPath,
        thumbnailExtension,
        setIsSeeDetailsOn,
        setSelectedSupe,
    } = props;

    const ThumbnailUrl = thumbnailPath + ImageSize + "." + thumbnailExtension;
    description = getWordStr(description) + "...";

    const SeeDetailsHandler = event => {
        event.preventDefault();
        setIsSeeDetailsOn(true);
        setSelectedSupe(id);
    };

    return (
        <div className="Card">
            <div
                className="Picture"
                style={{
                    height: "100%",
                    backgroundImage: `url(${ThumbnailUrl})`,
                    backgroundSize: "contain",
                    backgroundPosition: "top",
                    borderRadius: "inherit",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div className="Card__gradient-overlay">
                    <div className="Card-Top"></div>
                    <div className="Card-Bot">
                        <h2>{name}</h2>
                        <span>{description}</span>
                        <button onClick={SeeDetailsHandler}>More Details...</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SupeItem;
