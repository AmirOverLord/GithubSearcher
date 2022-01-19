import { getCahce } from "../utils"

// Cache 
const cacheMiddleware = async (req: any, res: any, next: any) => {
    const { value } = req.body;

    const data = await getCahce(value);

    if (data !== null) {
        res.json({ data: data });
    } else {
        next();
    }
}

export { cacheMiddleware }