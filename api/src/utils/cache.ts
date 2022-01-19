import { createClient } from 'redis';

const client = createClient();

const setCahce = async (key: string, data: any) => {
    await client.setEx(key, 7200, data);
}

const getCahce = async (key: string) => { 
    return await client.hGetAll(key);
}

const resetCache = () => { 
    client.flushAll();
 }

export { setCahce, getCahce, resetCache }