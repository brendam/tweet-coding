import React from 'react';
import ReactDOM from 'react-dom';
import DataOutput from './DataOutput';
import TweetIdEditor from './TweetIdEditor';
import TweetCoder from './TweetCoder';
import Pager from './Pager';
import demoTweetIds from '../lib/demoTweetIds';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.loadState();
    this.pageSize = 10;
  }

  componentDidMount() {
    if (this.state.tweetIds.length == 0) {
      this.updateTweetIds(demoTweetIds);
    }
  }

  componentDidUpdate() {
    localStorage.setItem('state', JSON.stringify(this.state));
  }

  loadState() {
    const state = JSON.parse(localStorage.getItem('state'));
    return { tweetIds: [], data: {}, offset: 0, ...state };
  }

  updateTweetData(tweetId, newData) {
    const data = this.state.data;
    data[tweetId] = { ...data[tweetId], ...newData };
    this.setState({ data: data });
  }

  populateData(tweetIds) {
    const newData = {};

    const defaultValues = { option: 'unknown', note: '' };
    
    tweetIds.forEach((tweetId) => {
        newData[tweetId] = defaultValues;
    });

    this.setState({ data: newData });
  }

  updateTweetIds(tweetIds) {
    this.setState({ tweetIds: tweetIds });
    this.populateData(tweetIds);
  }

  updateOffset(newOffset) {
    this.setState({ offset: newOffset });
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <small>Version 1.1</small>
        <div className="menu">
          <TweetIdEditor
            tweetIds={this.state.tweetIds}
            onChange={this.updateTweetIds.bind(this)}
          />
          <DataOutput data={this.state.data} />
        </div>
        <div className='page'>
          <Pager offset={this.state.offset} pageSize={this.pageSize} numItems={this.state.tweetIds.length} onChange={this.updateOffset.bind(this)} />
          {this.state.tweetIds.slice(this.state.offset, this.state.offset + this.pageSize).map(tweetId =>
            <TweetCoder
              key={tweetId}
              tweetId={tweetId}
              tweetCode={this.state.data[tweetId]}
              onChange={this.updateTweetData.bind(this)}
            />
          )}
          <Pager offset={this.state.offset} pageSize={this.pageSize} numItems={this.state.tweetIds.length} onChange={this.updateOffset.bind(this)} />
        </div>
      </div>
    );
  }
}

export default App;
