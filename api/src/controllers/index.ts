import axios from "axios";

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

        res.send(data);

    } catch (error) {
        console.error(error);
        res.status(500);
    }
}

/** Clear memory cache **/
const ClearCache = (req: any, res: any) => {}

export { Search, ClearCache }