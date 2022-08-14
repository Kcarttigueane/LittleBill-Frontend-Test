
import "./RatingSystem.scss"

const RatingSystem = ({ setIsRatingSytemOn }) => {

    const CloseRatingSystemHandler = event => {
        event.preventDefault();
        setIsRatingSytemOn(false);
    }

    return (
        <div className="RatingSystemContainer">
            <h1>Rating Sytem</h1>
            <ul>
                <li>ALL AGES - appropriate for all ages.</li>
                <li>A - Appropriate for age 9 and up.</li>
                <li>
                    T+ TEENS AND UP - Appropriate for most readers 13 and up,
                    parents are advised that they might want to read before or
                    with younger children.
                </li>
                <li>
                    PARENTAL ADVISORY - 15 years and older. Similar to T+ but
                    featuring more mature themes and/or more graphic imagery.
                </li>
                <li>
                    MAX: EXPLICIT CONTENT - 18 years old. Most Mature Readers
                    books will fall under the MAX comics banner (created
                    specifically for mature content titles), MAX and
                    Mature-themed titles will continue to be designed to appear
                    distinct from mainline Marvel titles, with the "MAX:
                    Explicit Content" label very prominent on the cover. MAX
                    titles will not be sold on the newsstand, and they will not
                    be marketed to younger readers.
                </li>
            </ul>
            <button onClick={CloseRatingSystemHandler}>Close</button>
        </div>
    );
};

export default RatingSystem;
