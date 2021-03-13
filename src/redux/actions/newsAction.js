export const FETCH_ARTICLES = 'FETCH_ARTICLES';
export const TOGGLE_FAVORITES = 'TOGGLE_FAVORITES';

export const fetchArticles = () => {
    return async dispatch => {

        const result = await fetch('http://newsapi.org/v2/everything?q=tesla&from=2021-02-13&sortBy=publishedAt&apiKey=6c9f35f3e08341eaa9e2f1446d0807b6')

        const resultData = await result.json();

        dispatch({
            type: FETCH_ARTICLES,
            payload: resultData
        })
    }
}

export const toggleFavorites = (url) => {
    return {
        type: TOGGLE_FAVORITES,
        payload: url
    }
}