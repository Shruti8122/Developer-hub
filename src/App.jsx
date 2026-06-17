import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { useState, useEffect } from "react";

function App() {

  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("darkMode");
    return savedTheme === "true";
  });

  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem("favorites");

    return savedFavorites
      ? JSON.parse(savedFavorites)
      : [];
  });

  const [activeView, setActiveView] = useState("analysis");

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [darkMode, favorites]);

  function handleToggle() {
    setDarkMode(!darkMode);
  }
  const handleFavorite = (repo) => {
    setFavorites(prev => [...prev, repo]);

  };

  const handleRemoveFavorite = (id) => {
    const updatedFavorites = favorites.filter(
      (repo) => repo.id !== id
    )
    setFavorites(updatedFavorites);
  }

  return (
    <>
      <Navbar
        darkMode={darkMode}
        handleToggle={handleToggle}
        favoritesCount={favorites.length}
        activeView={activeView}
        setActiveView={setActiveView}
      />

      <Hero
        darkMode={darkMode}
        favorites={favorites}
        handleRemoveFavorite={handleRemoveFavorite}
        handleFavorite={handleFavorite}
        activeView={activeView}
      />

    </>
  );
}

export default App;