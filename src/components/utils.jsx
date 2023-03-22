export default async function getMovies(url){
    const resp = await fetch(url);
    const response = await resp.json();
    const results = await response.results
    return results
}