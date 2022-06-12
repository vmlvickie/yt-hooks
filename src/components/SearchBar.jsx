import React, { useState } from "react";

const SearchBar = ({onFormSubmit}) =>{
  const [term, setTerm] = useState('');

  const onInputChange = e => {
    setTerm(e.target.value);
  }

  const onSubmit = event =>{
    event.preventDefault();      
    onFormSubmit(term);
  }

  return (
    <div className="search-bar ui segment">
      <form onSubmit={onSubmit} className="ui form">
        <div className="field">
          <label>Search for a Video</label>
          <input
            value={term}
            type="text"
            onChange={onInputChange}
          />
        </div>
      </form>
    </div>
  );

}

export default SearchBar;
