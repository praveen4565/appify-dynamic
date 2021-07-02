import React from 'react';
const Date = (props) => {
    return (<div>
        <label htmlFor={props.id}>{props.label}<input type="date" name={props.id} onChange={props.handleChange}  /> </label>
    </div>);
}

export default Date;