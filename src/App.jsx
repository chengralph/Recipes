import React, { useEffect, useState } from 'react';
import { parseYAMLWithFrontMatter } from './utils/parser';
import RecipeList from './components/RecipeList';

export default function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchYAMLs = async () => {
      const files = [
        'recipes/sides/gratin.yaml',
        'recipes/mains/steak.yaml',
        'recipes/desserts/tart.yaml',
      ];

      const loaded = await Promise.all(files.map(async (path) => {
        const res = await fetch(`/${path}`);
        const text = await res.text();
        const parsed = parseYAMLWithFrontMatter(text);
        return { ...parsed, path };
      }));

      setRecipes(loaded);
    };

    fetchYAMLs();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Recipes</h1>
      <RecipeList recipes={recipes} />
    </div>
  );
}
