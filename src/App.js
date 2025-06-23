import './App.css';
import SearchForm from './SearchForm';
import RecipeList from './RecipeList';
import RecipeModal from './RecipeModal';
import React, { useState } from 'react';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleSearch = async (query) => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(query)}`
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setRecipes(data.meals || []);
    } catch (err) {
      setError('Failed to fetch recipes. Please try again.');
      setRecipes([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-green-600 text-white py-6 mb-8 shadow">
        <h1 className="text-3xl font-bold text-center">Recipe Finder</h1>
      </header>
      <SearchForm onSearch={handleSearch} />
      {loading && (
        <p className="text-center text-blue-500 mb-4">Loading...</p>
      )}
      {error && (
        <p className="text-center text-red-500 mb-4">{error}</p>
      )}
      <RecipeList recipes={recipes} onSelect={setSelectedRecipe} />
      <RecipeModal recipe={selectedRecipe} onClose={() => setSelectedRecipe(null)} />
    </div>
  );
}

export default App;
