function FavoritesList({
    favorites,
    handleRemoveFavorite,
    darkMode
}) {
    return (
        <div
            className={`mt-8 p-6 rounded-2xl border shadow-lg ${
                darkMode
                    ? "bg-gray-800 border-gray-700"
                    : "bg-gray-50 border-gray-200"
            }`}
        >
            <h2 className="text-2xl font-bold text-yellow-500 mb-4">
                ⭐ Favorite Repositories
            </h2>

            {favorites.length > 0 ? (
                <div className="space-y-3">
                    {favorites.map((repo) => (
                        <div
                            key={repo.id}
                            className={`flex justify-between items-center p-4 rounded-xl border transition-all duration-200 hover:scale-[1.01] hover:shadow-lg ${
                                darkMode
                                    ? "bg-gray-700 border-gray-600"
                                    : "bg-white border-gray-300"
                            }`}
                        >
                            <div>
                                <h3
                                    className={`font-semibold ${
                                        darkMode
                                            ? "text-white"
                                            : "text-gray-800"
                                    }`}
                                >
                                    {repo.name}
                                </h3>

                                <p
                                    className={`text-sm ${
                                        darkMode
                                            ? "text-gray-400"
                                            : "text-gray-500"
                                    }`}
                                >
                                    ⭐ {repo.stargazers_count} Stars
                                </p>
                            </div>

                            <button
                                onClick={() =>
                                    handleRemoveFavorite(repo.id)
                                }
                                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all duration-200 cursor-pointer"
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                </div>
            ) : (
                <div
                    className={`text-center py-6 rounded-xl border ${
                        darkMode
                            ? "border-gray-700 text-gray-400"
                            : "border-gray-300 text-gray-500"
                    }`}
                >
                    No favorites added yet ⭐
                </div>
            )}
        </div>
    );
}

export default FavoritesList;