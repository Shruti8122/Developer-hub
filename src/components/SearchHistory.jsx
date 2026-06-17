function SearchHistory({ searchHistory, handleHistoryClick, handleHistoryDelete, darkMode }) {
    return (
        <div
            className={`mt-8 p-4 rounded-xl border shadow-lg  ${darkMode
                ? "bg-gray-800 border-gray-700"
                : "bg-white border-gray-200"
                }`}
        >
            <h2 className="text-2xl font-bold mt-8 text-yellow-600">
                Recent Searches
            </h2>
            {
                searchHistory.length > 0 ? (
                    searchHistory.map(
                        (item, index) => (
                            <div
                                key={index}
                                className={`flex justify-between items-center p-4 rounded-xl border transition-all duration-200 hover:scale-[1.01] hover:shadow-lg ${darkMode
                                        ? "bg-gray-700 border-gray-600"
                                        : "bg-white border-gray-300"
                                    }`}
                            >                                <h3
                                onClick={() => handleHistoryClick(item)}
                                className={` cursor-pointer ${darkMode
                                    ? "hover:text-yellow-400"
                                    : "hover:text-yellow-500"
                                }`}
                            >
                                    {item}
                                </h3>
                                <button onClick={() => handleHistoryDelete(index)} className="text-red-500 cursor-pointer">
                                    ❌
                                </button>
                            </div>
                        )
                    )
                ) : (
                    <h3>No recent searches</h3>
                )
            }
        </div>
    );
}

export default SearchHistory;