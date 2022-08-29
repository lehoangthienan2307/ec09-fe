import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const SearchForm = () => {
  const [search, setSearch] = useState('')
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    if(!search.trim()) return;
    return navigate(`/search/${search}`)
  }
  return (
    <div className='search_form'>
      <form onSubmit={handleSearch}>
        <input type="text" value={search}
        onChange={e => setSearch(e.target.value)} />
        <button>Search</button>
      </form>
    </div>
  )
}

export default SearchForm