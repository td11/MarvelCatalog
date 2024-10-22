import axios from 'axios';
import CryptoJS from 'crypto-js';

const instance = axios.create({
  baseURL: 'https://gateway.marvel.com/v1/public/',
  params: {
    ts: Date.now(),
    apikey: import.meta.env.REACT_PUBLIC_KEY,
    hash: ''
  }
});

function generateHash(ts: number, privateKey: string, publicKey: string): string {
    const message = `${ts}${privateKey}${publicKey}`;
    return CryptoJS.MD5(message).toString();
  }


async function getComics(limit: number = 20, offset: number = 0) {
    const ts = Date.now();
    const hash = generateHash(ts, import.meta.env.REACT_PRIVATE_KEY!, import.meta.env.REACT_PUBLIC_KEY!);

    return instance.get(`comics?limit=${limit}&offset=${offset}`, {
        params: {
        ts,
        apikey: import.meta.env.REACT_PUBLIC_KEY!,
        hash
        }
    });
}

export { getComics };
