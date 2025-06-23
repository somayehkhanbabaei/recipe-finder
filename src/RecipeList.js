import React from 'react';

function RecipeList({ recipes, onSelect }) {
  if (!recipes.length) {
    return (
      <p className="text-center text-gray-500">No recipes found. Try searching for something else!</p>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
      {recipes.map((recipe) => (
        <div
          key={recipe.idMeal}
          className="bg-white rounded shadow p-4 flex flex-col items-center cursor-pointer hover:shadow-lg transition"
          onClick={() => onSelect(recipe)}
          tabIndex={0}
          role="button"
          aria-pressed="false"
          onKeyPress={(e) => {
            if (e.key === 'Enter' || e.key === ' ') onSelect(recipe);
          }}
        >
          <img
            src={recipe.strMealThumb}
            alt={recipe.strMeal}
            className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-cover rounded mb-4"
          />
          <h2 className="text-lg font-semibold text-center">{recipe.strMeal}</h2>
        </div>
      ))}
    </div>
  );
}

export default RecipeList;
