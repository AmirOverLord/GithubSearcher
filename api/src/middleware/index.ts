import { getCahce, isExists } from "../utils"

// Cache 
const cacheMiddleware = async (req: any, res: any, next: any) => {
    const { value } = req.body;

    const exists = await isExists(value);

    if (exists !== 0) {
        const rawdData: any = await getCahce(value);
        const data = JSON.parse(rawdData);
        res.json({ data: data});
    } else {
        next();
    }
}

export { cacheMiddleware }