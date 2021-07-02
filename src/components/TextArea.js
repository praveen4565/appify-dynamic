import React from 'react';
const TextArea = (props) => {
  return (<div>
    <label htmlFor={props.id}>{props.label}<textarea name={props.id} onChange={props.handleChange}  /> </label>
  </div>);
}
export default TextArea;