import React from 'react';
import List from './List';

const UserGenresInput = ({ genres, onChange }) => (
  <div>
    <p>
      Your Genres:
      <List
        listItems={Object.keys(genres)}
      />
    </p>
    <p>
      <select
        required
        multiple
        id="genres"
        name="genres"
        onChange={onChange}
      >
        <option value="rock">rock</option>
        <option value="jazz">jazz</option>
        <option value="blues">blues</option>
        <option value="folk">folk</option>
        <option value="reggae">reggae</option>
        <option value="country">country</option>
        <option value="pop">pop</option>
        <option value="punk">punk</option>
        <option value="metal">metal</option>
        <option value="edm">edm</option>
        <option value="r&b">r&b</option>
        <option value="funk">funk</option>
        <option value="rap">rap</option>
        <option value="disco">disco</option>
        <option value="pop">pop</option>
      </select>
    </p>
  </div>
);

export default UserGenresInput;
