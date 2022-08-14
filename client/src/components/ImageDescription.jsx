import "./ImageDescription.scss";

import { ThumbnailFullSizePath as ImageSize } from "../utils/ConstantData";

const ImageDescription = ({ SupeDetails }) => {
    let imageUrl = SupeDetails[0].thumbnail.path + ImageSize + "." + SupeDetails[0].thumbnail.extension;
    let SupeName = SupeDetails[0].name;
    let SupeDescription = <p>{SupeDetails[0].description}</p>;
    let NoDescription = (
        <p style={{ fontFamily: "Permanent Marker" }}>
            No Description available
        </p>
    );
    let LatestModifiedDate = SupeDetails[0].modified;

    return (
        <>
            <img src={imageUrl} alt={SupeName}/>
            <div className="SupeDetails">
                <h1>{SupeName}</h1>
                {SupeDescription ? (SupeDescription) : (NoDescription)}
                <span>Latest Update : {LatestModifiedDate.split('T')[0].split('-').reverse().join('-')}</span>
            </div>
        </>
    );
};

export default ImageDescription;
