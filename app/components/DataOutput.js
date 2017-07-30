import React from 'react';

const DataOutput = ({data}) => {
  const seperator = ',';

  let csv = "ID,Code,Note\n";
  Object.entries(data).forEach(([id, values]) => {
    csv += `${id},${values.option},"${values.note.replace(/"/g, '\\"')}"\n`;
  });
  csv = encodeURIComponent(csv);

  return (
    <a className='bigButton' href={`data:text/plain;charset=utf-8,${csv}`} download='data.csv'>Save Coding Data</a>
  );
}

export default DataOutput;
