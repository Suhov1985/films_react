const initialState = {
    lang: "ru-Ru",
    img: "https://image.tmdb.org/t/p/w185_and_h278_bestv2",
    articleItem: (id, lang) => {
        return fetch('' +
            `https://api.themoviedb.org/3/movie/${id}?api_key=24f501845f94ecdd83b2fe94f252059a&language=${lang}`,
            {
                method: 'GET'
            }
        )
    },
    blogItem: (lang) => {
        return fetch('' +
            `https://api.themoviedb.org/3/movie/popular?api_key=24f501845f94ecdd83b2fe94f252059a&language=${lang}&page=1`,
            {
                method: 'GET'
            }
        )
    }
}

export default function movie(state = initialState) {
    return state
}