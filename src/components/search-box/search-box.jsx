import React from 'react';
import './search-box.css';
export const SearchBox = ({handleChange,placeholder}) => (
<input className='search' type='serach' placeholder= {placeholder} onChange= {handleChange} />
)