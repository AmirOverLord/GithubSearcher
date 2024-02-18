import { createClient } from 'redis';

const client = createClient();

client.connect();

client.on("connect", () => {
  console.log("redis connected");
});

client.on("error", (err) => {
  console.log(err);
});

const setCahce = async (key: string, data: any) => {
    await client.setEx(key, 7200, JSON.stringify(data));
}

const isExists = async (key: string) => { 
    return await client.exists(key);
}

const getCahce = async (key: string) => { 
    return await client.get(key);
}

const resetCache = () => { 
    client.flushAll();
 }

export { setCahce, getCahce, resetCache, isExists }