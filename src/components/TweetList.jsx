import React from 'react';
import TweetCards from './TweetCards';
import { connect } from "react-redux";

const TweetList = (props) => {

    return (
        <>
            <h2>Tweet Thread Preview</h2>
            <div style={{ "justifyContent": "center" }}>
                {props.eachTweet.map((e, i) => {
                    return <TweetCards key={i} tweet={e.join(' ')} />
                })}
            </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
        tweet: state.tweet,
        eachTweet: state.eachTweet,
        isSending: state.isSending,
        error: state.error
    }
}

export default connect(
    mapStateToProps
)(TweetList);