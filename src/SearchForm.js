import React, { useState } from 'react';

function SearchForm({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row justify-center mb-8 gap-2 sm:gap-0">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for recipes..."
        className="w-full sm:w-2/3 md:w-1/2 px-4 py-2 rounded-l sm:rounded-l border border-gray-300 focus:outline-none"
        aria-label="Search for recipes"
      />
      <button
        type="submit"
        className="px-6 py-2 bg-green-600 text-white rounded sm:rounded-r hover:bg-green-700"
      >
        Search
      </button>
    </form>
  );
}

export default SearchForm;
