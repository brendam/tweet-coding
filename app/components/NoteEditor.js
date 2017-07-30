import React from 'react';

const NoteEditor = ({note, onChange}) => {
  return (
    <div className="note">
      <label>Note</label>
      <input value={note} onChange={e => onChange(e.target.value)} />
    </div>
  );
}

export default NoteEditor;