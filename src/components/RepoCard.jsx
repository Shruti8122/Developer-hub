function RepoCard({ repo, isFavorite, darkMode, handleFavorite }) {
    return (
            <div
                key={repo.id}
                className="p-4 border rounded-lg mb-4 hover:shadow-xl hover:scale-[1.01] transition-all duration-200">
                <h2 className="text-xl font-bold text-yellow-600">
                    {repo.name}
                </h2>

                <p className="text-gray-600 mt-2">
                    {repo.description || "No description available"}
                </p>
                <p>
                    <button
                        disabled={isFavorite}
                        onClick={() => handleFavorite(repo)}
                        className="cursor-pointer inline-block mt-4 bg-yellow-500 text-white px-4 py-2 rounded-lg">
                        {isFavorite ? "✅ Favorited" : "⭐ Favorite"}
                    </button>
                </p>

                <p className={darkMode ? "text-gray-300 mt-3" : "text-gray-600 mt-3"}>
                    <span className="font-semibold">Language:</span>{" "}
                    {repo.language || "Not specified"}
                </p>

                <p className="mt-1">
                    ⭐ {repo.stargazers_count}
                </p>
                <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block mt-4 bg-yellow-500 text-white px-4 py-2 rounded-lg"
                >
                    View Repository
                </a>
            </div>
    )
}

export default RepoCard;