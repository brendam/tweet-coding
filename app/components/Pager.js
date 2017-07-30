import React from 'react';

const Pager = ({offset, pageSize, numItems, onChange}) => {
  const previous = () => {
    let newOffset = offset - pageSize;
    if(newOffset < 0) newOffset = 0;
    onChange(newOffset);
  };

  const next = () => {
    let newOffset = offset + pageSize;
    if(newOffset < numItems-1) onChange(newOffset);
  };

  return (
    <div className='pager'>
      <button disabled={offset - pageSize < 0} onClick={previous}>Previous</button>
      <span>{offset/pageSize + 1} / {Math.ceil(numItems/pageSize)}</span>
      <button disabled={offset + pageSize > numItems-1} onClick={next}>Next</button>
    </div>
  );
}

export default Pager;