import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from "axios";
import { connect } from "react-redux";
import { saveTweetData } from "../actions/tweetActions";

const TweetInput = (props) => {

    const [tweet, setTweet] = useState('');

    const handleSubmit = (e) => {
        // make call to reducer to process tweet on submit
        e.preventDefault();
    }

    const handleChanges = (e) => {
        setTweet(e.target.value);
        saveTweetData(t => t);
    }

    return (
        <>
        <section style={{ "width": "50%", "marginLeft": "5%" }}>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for="tweet">Enter Tweet Thread Below:</Label>
                    <Input id="tweet" type="textarea" name="tweet" onChange={handleChanges} value={tweet}></Input>
                    <Button style={{ "marginTop": "2%" }} color="primary" type="submit">Preview</Button>
                </FormGroup>
            </Form>
        </section>
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
    { saveTweetData }
)(TweetInput);