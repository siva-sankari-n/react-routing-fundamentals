import React, { useEffect, useState } from "react";
import axios from "axios";

const RecipeApp = () => {
  const [recipes, setRecipes] = useState([]); // State to hold recipe data
  const [error, setError] = useState(""); // State for error handling

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get(
          "https://api.edamam.com/api/recipes/v2",
          {
            params: {
              app_id: "your_app_id",
              app_key: "your_app_key",
              type: "public",
              q: "chicken", // Query for recipes (e.g., chicken dishes)
            },
          }
        );
        setRecipes(response.data.hits); // Save recipes to state
      } catch (err) {
        setError("Failed to fetch recipes. Try again later.");
      }
    };

    fetchRecipes(); // Call the function when the component mounts
  }, []); // Empty dependency array to run useEffect once

  return (
    <div>
      <h1>Recipe App</h1>
      {error && <p>{error}</p>}
      <ul>
        {recipes.map((recipe, index) => (
          <li key={index}>{recipe.recipe.label}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeApp;
