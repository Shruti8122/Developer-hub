function Navbar({
    darkMode,
    handleToggle,
    favoritesCount,
    activeView,
    setActiveView
}) {
    return (
        <nav
            className={`flex justify-between items-center px-8 py-4 ${
                darkMode
                    ? "bg-gray-950 text-white"
                    : "bg-white text-black"
            }`}
        >
            <h1 className="text-2xl font-bold">
                Developer Hub
            </h1>

            <div className="flex gap-3">

                <button
                    onClick={() =>
                        setActiveView("analysis")
                    }
                    className={`px-3 py-2 rounded-lg ${
                        activeView === "analysis"
                            ? "bg-yellow-500 text-white"
                            : ""
                    }`}
                >
                    📊 Analysis
                </button>

                <button
                    onClick={() =>
                        setActiveView("favorites")
                    }
                    className={`px-3 py-2 rounded-lg ${
                        activeView === "favorites"
                            ? "bg-yellow-500 text-white"
                            : ""
                    }`}
                >
                    ⭐ Favorites
                </button>

                <button
                    onClick={() =>
                        setActiveView("languages")
                    }
                    className={`px-3 py-2 rounded-lg ${
                        activeView === "languages"
                            ? "bg-yellow-500 text-white"
                            : ""
                    }`}
                >
                    🌐 Languages
                </button>

            </div>

            <div className="flex items-center gap-2">
                <span>⭐</span>
                <span>{favoritesCount}</span>
            </div>

            <button
                onClick={handleToggle}
                className="px-4 py-2 rounded-lg bg-yellow-500 text-white cursor-pointer"
            >
                {darkMode
                    ? "☀️ Light"
                    : "🌙 Dark"}
            </button>
        </nav>
    );
}

export default Navbar;