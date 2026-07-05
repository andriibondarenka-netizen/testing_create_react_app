import React, { useState } from 'react';

const SearchBar = () => {
  const [searchParams, setSearchParams] = useState({
    destination: '',
    checkIn: '',
    checkOut: '',
    guests: '2'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchParams(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchParams);
    alert(`Searching for hotels in ${searchParams.destination || 'any location'} for ${searchParams.guests} guest(s)`);
  };

  return (
    <div className="search-bar-container">
      <form onSubmit={handleSearch} style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', justifyContent: 'center', width: '100%' }}>
        <input
          type="text"
          name="destination"
          placeholder="Where are you going?"
          value={searchParams.destination}
          onChange={handleChange}
          className="search-input"
        />
        <input
          type="date"
          name="checkIn"
          value={searchParams.checkIn}
          onChange={handleChange}
          className="search-input"
        />
        <input
          type="date"
          name="checkOut"
          value={searchParams.checkOut}
          onChange={handleChange}
          className="search-input"
        />
        <select
          name="guests"
          value={searchParams.guests}
          onChange={handleChange}
          className="search-input"
        >
          <option value="1">1 Guest</option>
          <option value="2">2 Guests</option>
          <option value="3">3 Guests</option>
          <option value="4">4 Guests</option>
          <option value="5">5+ Guests</option>
        </select>
        <button type="submit" className="search-button">🔍 Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
