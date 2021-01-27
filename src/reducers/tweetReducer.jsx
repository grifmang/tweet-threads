import {
    SEND_TWEET,
    SEND_SUCCESS,
    SEND_FAILURE,
    PREVIEW_TWEET,
    SAVE_EACH_TWEET
} from '../actions';

const initialState = {
    tweet: '',
    eachTweet: [],
    message: '',
    isSending: false,
    error: ''
}

// Needs to be finished
// Send tweet to backend to process through Twitter
const tweetReducer = (state=initialState, action) => {
    switch (action.type) {
        case PREVIEW_TWEET:
            return {
                ...state,
                tweet: action.payload
            }
        case SAVE_EACH_TWEET:
            return {
                ...state,
                eachTweet: action.payload
            }
        case SEND_TWEET:
            return {
                ...state,
                isSending: true
            };
        case SEND_SUCCESS:
            return {
                ...state,
                message: action.payload,
                isSending: false
            };
        case SEND_FAILURE:
            return {
                ...state,
                isSending: false,
                error: action.payload
            };
        default:
            return state;
    }
}

export default tweetReducer;