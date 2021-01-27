import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from "axios";
import { connect } from "react-redux";
import { saveTweetData, saveEachTweets } from "../actions/tweetActions";

const TweetInput = (props) => {

    const [tweet, setTweet] = useState('');

    const handleSubmit = (e) => {
        // make call to reducer to process tweet on submit
        e.preventDefault();
        props.saveTweetData(tweet)
        props.saveEachTweets(countAndSplit(tweet));
    }

    const handleChanges = (e) => {
        setTweet(e.target.value);
    }

    const countAndSplit = str => {
        const strArr = str.split(' ');
        let returnArr = [];
        let tempArr = [];
        let tempCount = 0;
        strArr.forEach(element => {
          if (tempCount > 275) {
            returnArr.push(tempArr);
            tempCount = 0
            tempArr = []
            let lastElement = returnArr[returnArr.length -1].pop();
            tempArr.push(lastElement);
            tempArr.push(element);
            tempCount += element.length + 2
          } else {
            tempArr.push(element);
            tempCount += element.length + 1;
          }
        })
        
        if (tempArr.length < 275) {
          returnArr.push(tempArr)
        }
        
        // returnArr.forEach(element => {
        //   console.log(element.join(' ').length)  
        // })
        
        return returnArr;
    }

    return (
        <>
        <section style={{ "width": "50%", "marginLeft": "5%" }}>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for="tweet">Enter Tweet Thread Below:</Label>
                    <Input id="tweet" type="textarea" name="tweet" onChange={handleChanges} value={tweet}></Input>
                    <Button style={{ "marginTop": "2%" }} color="primary" type="submit" >Preview</Button>
                </FormGroup>
            </Form>
        </section>
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
    mapStateToProps,
    { saveTweetData, saveEachTweets }
)(TweetInput);