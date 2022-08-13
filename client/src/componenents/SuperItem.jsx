import { Link } from 'react-router-dom';

import "./SuperItem.css";

const ThumbnailSize = "/detail";

function getWordStr(str) {
    return str.split(/\s+/).slice(0, 15).join(" ");
}

const SuperItem = props => {
    let { id, name, description, thumbnailPath, thumbnailExtension } = props;

    const ThumbnailUrl = thumbnailPath + ThumbnailSize + "." + thumbnailExtension;

    description = getWordStr(description) + "...";

    return (
        <div className="Card">
            <div className="Picture"
                style={{
                    height: '100%',
                    backgroundImage: `url(${ThumbnailUrl})`,
                    backgroundSize: 'contain',
                    backgroundPosition: 'top',
                    borderRadius: 'inherit',
                    backgroundRepeat: 'no-repeat',
                }}
                >
                <div className="Card__gradient-overlay">
                    <div className="Card-Top"></div>
                    <div className="Card-Bot">
                        <h2>{name}</h2>
                        <span>{description}</span>
                        <button>
                            <Link to={`/${id}`}>More Details...</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SuperItem;
