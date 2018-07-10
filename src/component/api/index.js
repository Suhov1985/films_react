export const articleItem = (id) => {
    return fetch('' +
        `https://api.themoviedb.org/3/movie/${id}?api_key=24f501845f94ecdd83b2fe94f252059a&language=ru-Ru`,
        {
            method: 'GET'
        }
    )
}