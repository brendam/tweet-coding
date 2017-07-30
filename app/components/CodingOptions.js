import React from 'react';

const CodingOptions = ({option, onChange}) => {
  const options = ['unknown', 'True', 'False'];
  const name = Math.random();
  return (
    <div className="options">
      {options.map((o) =>
        <label key={o}>
          <input type='radio' value={o} checked={option === o} onChange={() => onChange(o)} />
          {o}
        </label>)}
    </div>
  );
}

export default CodingOptions;
