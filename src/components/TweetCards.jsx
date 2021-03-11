import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots, faUpload, faEllipsisH, faRetweet } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import avatar from "../images/avatar.png";

const TweetCards = (props) => {

    return (
        <div style={{ "width": "400px", "borderRadius": "10px", "border": "1px solid grey", "marginBottom": "2%" }} className="tweet">
            <div style={{ "display": "inline-block", "width": "100%" }} className="tweetHeader">
                <div style={{ "margin": "1% 0 0 1%", "float": "left", "width": "20%" }} className="avatar"><img src={avatar} alt="avatar" /></div>
                <div style={{ "float": "right", "marginRight": "2%" }}>
                    <FontAwesomeIcon icon={faEllipsisH} />
                </div>
            </div>
            <div style={{ "margin": "0 3% 0 3%" }} className="text">
                <p>{props.tweet}</p>
            </div>
            <hr />
            <div style={{ "display": "flex", "justifyContent": "space-between", "marginBottom": 
        "2%", "margin": "0 3% 0 3%" }} className="engagements">
                <div>
                    <FontAwesomeIcon icon={faCommentDots} size="2x" />
                </div>
                <div>
                    <FontAwesomeIcon icon={faRetweet}size="2x" />
                </div>
                <div>
                    <FontAwesomeIcon icon={faHeart}size="2x" />
                </div>
                <div>
                    <FontAwesomeIcon icon={faUpload}size="2x" />
                </div>
            </div>
        </div>
    )
}

export default TweetCards;