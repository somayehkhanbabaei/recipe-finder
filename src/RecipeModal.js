import React, { useEffect } from 'react';

function RecipeModal({ recipe, onClose }) {
  useEffect(() => {
    if (!recipe) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [recipe, onClose]);

  if (!recipe) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      role="dialog"
      aria-modal="true"
      aria-label={recipe.strMeal}
      tabIndex={-1}
    >
      <div className="bg-white rounded-lg p-6 max-w-lg w-full relative">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl"
          onClick={onClose}
          aria-label="Close modal"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4">{recipe.strMeal}</h2>
        <img
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          className="w-full h-48 sm:h-64 object-cover rounded mb-4"
        />
        <h3 className="font-semibold mb-2">Instructions</h3>
        <p className="mb-4">{recipe.strInstructions}</p>
        <h3 className="font-semibold mb-2">Ingredients</h3>
        <ul className="list-disc list-inside">
          {Array.from({ length: 20 }, (_, i) => i + 1)
            .map((num) => ({
              ingredient: recipe[`strIngredient${num}`],
              measure: recipe[`strMeasure${num}`],
            }))
            .filter((item) => item.ingredient && item.ingredient.trim())
            .map((item, idx) => (
              <li key={idx}>
                {item.ingredient} {item.measure && `- ${item.measure}`}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default RecipeModal;
