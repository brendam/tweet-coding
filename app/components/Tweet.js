import React from 'react';
import { createTweet } from '../lib/twttr';

class Tweet extends React.Component {
  componentDidMount() {
    createTweet(this.props.tweetId, this.tweetDiv);
  }

  render() {
    return (
      <div ref={div => this.tweetDiv = div} />
    );
  }
}

export default Tweet;
