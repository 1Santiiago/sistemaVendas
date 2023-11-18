// InputSearch.jsx
import React, { useState } from 'react';
import * as c from './style'
function InputSearch({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
};

const handleSearchClick = () => {
    onSearch(searchTerm);
    setSearchTerm('')
  };

  return (
    <c.ContainerSearcher>
      <input
        type="text"
        placeholder='Find...'
        value={searchTerm}
        onChange={handleInputChange}
      />
      <c.ButtonSearcher onClick={handleSearchClick}>Buscar</c.ButtonSearcher>
    </c.ContainerSearcher>
  );
}

export default InputSearch;
