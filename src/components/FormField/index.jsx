import React from 'react';

export default props => (
    <div>
    <label>{props.label}:
     <input type={props.type}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
      />
    </label>
  </div>
)