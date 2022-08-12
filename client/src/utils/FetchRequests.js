import md5 from "crypto-js/md5";
import axios from "axios";

const API_BASE_ENDPOINT = process.env.REACT_APP_BASE_URL;

const getHash = (ts, privateApiKey, publicApiKey) => {
    return md5(ts + privateApiKey + publicApiKey).toString();
};

const FetchSupesNameStartWith = async ( value ) => {
    let baseUrl = `${API_BASE_ENDPOINT}/v1/public/characters`;

    let ts = Date.now().toString();
    let publicApiKey = process.env.REACT_APP_PUBLIC_KEY;
    let privateApiKey = process.env.REACT_APP_PRIVATE_KEY;
    let hash = getHash(ts, privateApiKey, publicApiKey);

    try {
        const res = await axios.get(baseUrl, {
            params: {
                "nameStartsWith": `${value}`,
                "apikey": publicApiKey,
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
    let publicApiKey = process.env.REACT_APP_PUBLIC_KEY;
    let privateApiKey = process.env.REACT_APP_PRIVATE_KEY;
    let hash = getHash(ts, privateApiKey, publicApiKey);

    try {
        const res = await axios.get(baseUrl, {
            params: {
                "apikey": publicApiKey,
                "ts": ts,
                "hash": hash
            },
        });
        console.log(res.data.data.results[0].thumbnail);
        console.log(res.data.data.results);
        return res.data.data.results;
    } catch (error) {
        console.log(error);
        return;
    }
};

export { FetchSupesNameStartWith, FetchSupeById };
