import md5 from "crypto-js/md5";
import axios from "axios";

const API_BASE_ENDPOINT = process.env.REACT_APP_BASE_URL;
let publicApiKey = process.env.REACT_APP_PUBLIC_KEY;
let privateApiKey = process.env.REACT_APP_PRIVATE_KEY;

const getHash = (ts) => {
    return md5(ts + `${privateApiKey}` + `${publicApiKey}`).toString();
};

const FetchSupesNameStartWith = async ( value ) => {
    let baseUrl = `${API_BASE_ENDPOINT}/v1/public/characters`;

    let ts = Date.now().toString();
    let hash = getHash(ts);

    try {
        const res = await axios.get(baseUrl, {
            params: {
                "nameStartsWith": `${value}`,
                "apikey": `${publicApiKey}`,
                "ts": ts,
                "hash": hash
            },
        });
        return res.data.data.results;
    } catch (error) {
        console.log(error);
        return;
    }
};

// ? find an optimal solution to avoid redundancy

const FetchSupeById = async ( HeroId ) => {
    let baseUrl = `${API_BASE_ENDPOINT}/v1/public/characters/${HeroId}`;

    let ts = Date.now().toString();
    let hash = getHash(ts);

    try {
        const res = await axios.get(baseUrl, {
            params: {
                "apikey": `${publicApiKey}`,
                "ts": ts,
                "hash": hash
            },
        });
        return res.data.data.results;
    } catch (error) {
        console.log(error);
        return;
    }
};

const FetchCharacterSeriesInfos = async ( HeroId ) => {
    let baseUrl = `${API_BASE_ENDPOINT}/v1/public/characters/${HeroId}/series`;

    let ts = Date.now().toString();
    let hash = getHash(ts);

    try {
        const res = await axios.get(baseUrl, {
            params: {
                "apikey": `${publicApiKey}`,
                "ts": ts,
                "hash": hash
            },
        });
        return res.data.data.results;
    } catch (error) {
        console.log(error);
        return;
    }
};

export { FetchSupesNameStartWith, FetchSupeById, FetchCharacterSeriesInfos };
