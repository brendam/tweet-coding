import React from 'react';
import Tweet from './Tweet';
import CodingOptions from './CodingOptions';
import NoteEditor from './NoteEditor';

const TweetCoder = ({tweetId, tweetCode, onChange}) => {
  const handleOptionChange = option => onChange(tweetId, {option: option});
  const handleNotesChange = notes => onChange(tweetId, {note: notes});
  return (
    <div className='tweet-coder'>
      <div className='tweet'>
        <Tweet tweetId={tweetId} />
      </div>
      <div className='coding-form'>
        <CodingOptions tweetId={tweetId} option={tweetCode.option} onChange={handleOptionChange} />
        <NoteEditor tweetId={tweetId} note={tweetCode.note} onChange={handleNotesChange} />
      </div>
    </div>
  );
}

export default TweetCoder;