import React from 'react';

import './search-box.styles.css';

// If you don't need access to state, or lifecycle methods, use functional components
export const SearchBox = ({ placeholder, handleChange }) => (
    <input className='search' type="search" placeholder={placeholder} onChange={handleChange} />
)