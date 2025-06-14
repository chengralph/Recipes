import React from 'react';
import RecipeCard from './RecipeCard';

export default function RecipeList({ recipes }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {recipes.map((recipe, i) => (
        <RecipeCard key={i} recipe={recipe} />
      ))}
    </div>
  );
}
