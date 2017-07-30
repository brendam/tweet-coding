import React from 'react';
import demoTweetIds from '../lib/demoTweetIds';

function findDuplicates(array) {
  return array.filter((v, i, a) => a.indexOf(v) !== i); 
}

class TweetIdEditor extends React.Component {
  constructor() {
    super();
    this.state = { modalOpen: false };
  }
  
  closeModal() {
    this.setState({ modalOpen: false, error: null });
  }
  
  openModal() {
    this.setState({ modalOpen: true });
  }

  showError(errorMessage, errorTweetIds) {
    let error = errorMessage;
    if(errorTweetIds) {
      const tweetIdsString = errorTweetIds.reduce((acc, i) => acc + `, ${i}`);
      error += ` (${tweetIdsString})`;
    }
    this.setState({ error });
  }

  badTweetIdsError(badTweetIds) {
    this.showError(`${badTweetIds.length} invalid tweet ID${badTweetIds.length > 1 ? 's' : ''}: ${badTweetIdsString}`);
  }

  loadDemoData() {
    this.props.onChange(demoTweetIds);
    this.closeModal();
  }

  handleChange() {
    const seperator = '\n';
    const data = this.textarea.value.split(seperator).map(i => i.trim()).filter(i => i.length > 0);
    const badTweetIds = data.filter(i => i.match(/[^0-9]/));
    const duplicates = findDuplicates(data);
    if(badTweetIds.length > 0) {
      this.showError('Invalid tweet IDs', badTweetIds);
    } else if(data.length == 0) {
      this.showError('Please enter some tweet IDs.');
    } else if(duplicates) {
      this.showError('Duplicate tweet IDs.', duplicates);
    } else {
      this.props.onChange(data);
      this.closeModal();
    }
  }

  render() {
    return (
      <div>
        <button className='bigButton' onClick={this.openModal.bind(this)}>Load New Dataset</button>
        { this.state.modalOpen ? 
          <div>
            <div className='modal'>
              <button className='modalClose' onClick={this.closeModal.bind(this)}>&times;</button>
              <div className='tweetIdEditor'>
                <h2>New Dataset</h2>
                <p className='warning'>Warning! The current data will be deleted. Save your data before loading a new dataset.</p>
                <p>Paste a new dataset into the box below, one tweet ID per line:</p>
                <textarea ref={node => this.textarea = node}></textarea>
                { this.state.error ? <p className='error'>Error: {this.state.error}</p> : null }
                <button onClick={this.handleChange.bind(this)}>Load Dataset</button>
                <div className='or'>OR</div>
                <button onClick={this.loadDemoData.bind(this)}>Load Demo Dataset</button>
              </div>
            </div>
            <div className='modalBackdrop' onClick={this.closeModal.bind(this)} />
          </div>
        : null }
      </div>
    );
  }
}

export default TweetIdEditor;