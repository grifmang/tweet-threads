import axios from 'axios';

export const SEND_TWEET = 'SEND_TWEET';
export const SEND_SUCCESS = 'SEND_SUCCESS';
export const SEND_FAILURE = 'SEND_FAILURE';
export const PREVIEW_TWEET = 'PREVIEW_TWEET';

export const sendToBackend = (tweet) => dispatch => {
    dispatch({ type: SEND_TWEET });
    dispatch({ type: PREVIEW_TWEET, payload: tweet })
    axios
    .post('BACKEND API ADDRESS')
    .then(response => {
        if (response) {
            dispatch({ type: SEND_SUCCESS, payload: "Tweet thread posted." });
        }
    })
    .catch(err => {
        dispatch({ type: SEND_FAILURE, payload: err.response });
    });
}

export const saveTweetData = (tweet) => dispatch => {
    console.log(tweet)
    dispatch({ type: PREVIEW_TWEET, payload: tweet });
}