import React, { useEffect, useState } from 'react';
import TweetCards from './TweetCards';
import { connect } from "react-redux";

const TweetList = (props) => {

    console.log('props', props);
    const [cardAmount, setCardAmount] = useState(1);
    const [eachTweet, setEachTweet] = useState([]);
    const [tweetLengthCount, setTweetLengthCount] = useState(0);

    useEffect(() => {
        if (props.tweet.length <= 275) {
            console.log('one tweet')
            setCardAmount(1);
        } else {
            console.log('multiple')
            if (props.tweet.length / 275 > Math.floor(props.tweet.length / 275)) {
                setCardAmount(Math.floor(props.tweet.length / 275) + 1)
            } else {
                setCardAmount(Math.floor(props.tweet.length / 275))
            }
        }
    });

    useEffect(() => {
        let singleTweet = [];
        if (cardAmount > 1) {
            for (let i=0; i<cardAmount; i++) {
                props.tweet.split(' ').forEach(element => {
                    if (tweetLengthCount > 275) {
                        setEachTweet([...eachTweet, [singleTweet]]);
                        setTweetLengthCount(0)
                    } else {
                        singleTweet.push(element)
                        setTweetLengthCount(t => t + element.length + 1)
                    }
                })
            }
        }
    }, [cardAmount])

    return (
        <>
            <h2>Tweet Thread Preview</h2>
            {console.log(props.tweet)}
            {console.log('CA', cardAmount)}
            <TweetCards tweet={props.tweet} />
            {/* {cardAmount === 1 
            ? <TweetCards tweet={props.tweet} />
            : eachTweet.map((e, i) => {
                return <TweetCards key={i} tweet={e.join(' ')} />
            })} */}
        </>
    )
}

const mapStateToProps = state => {
    return {
        tweet: state.tweet,
        isSending: state.isSending,
        error: state.error
    }
}

export default connect(
    mapStateToProps,
)(TweetList);