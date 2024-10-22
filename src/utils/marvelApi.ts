import Marvel from 'marvel-api-client';


// PUBLIC_KEY=d26310aa64bd024c14efa9c7d0dfa3f2
// PRIVATE_KEY=71f3dbd079ddcbd2585b929d6071e19b3c9ee5e3

const marvelApi = Marvel.createClient({
  publicKey: import.meta.env.VITE_PUBLIC_KEY,
  privateKey: import.meta.env.VITE_PRIVATE_KEY
});


console.log(marvelApi);

async function getComics(limit = 20) {
  try {
    const comics = await marvelApi.comics.list({
      limit,
      offset: 0
    });

    return comics.data.results;
  } catch (error) {
    console.error('Error fetching comics:', error);
    throw error;
  }
}


export default { getComics };
