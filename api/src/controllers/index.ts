import axios from "axios";
import { setCahce, resetCache } from "../utils"

/** Fetch data from github api by user id or repo **/
const Search = async (req: any, res: any) => {
    const { value, type } = req.body
    // check if felids not empty
    if (value == null || type == null) {
        res.json({error: "no data!, try again"})
    }

    try {
        console.log("Fetching data...");
        
        // fetch the data from github api
        const url = `https://api.github.com/${type}/${value}`;
        const response = await axios.get(url);
        const data = await response.data;

        // cache the data for the next 2 hours
        setCahce(value, data);

        // send response back to the user
        res.json({ data: data });

    } catch (error) {
        console.error(error);
        res.status(500);
    }
}

/** Clear memory cache **/
const ClearCache = (req: any, res: any) => {
    // clear the cashe
    resetCache();

    // response back to the user
    res.json({message: "Cache cleared!."})
}

export { Search, ClearCache }