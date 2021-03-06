import React from 'react';

const FirstNameInput = ({ value, onChange }) => (
  <p>
    <label htmlFor="first">
      First Name:
    </label>
    <input
      required
      id="first"
      type="text"
      name="first"
      value={value}
      onChange={onChange}
    />
  </p>
);

export default FirstNameInput;
