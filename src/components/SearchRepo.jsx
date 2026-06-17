function SearchRepo({darkMode,setCurrentPage,setSortBy,searchRepo,SetSearchRepo,sortBy}){
    return(
                    <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2">
                    🔍 Search Repositories
                </h3>
                <input
                    type="text"
                    value={searchRepo}
                    onChange={(e) => {
                        SetSearchRepo(e.target.value), setCurrentPage(1)
                    }}
                    placeholder="Search by name..."
                    className="w-full max-w-md px-4 py-2 rounded-lg"
                />
                <select
                    value={sortBy}
                    onChange={(e) => {
                        setSortBy(e.target.value);
                        setCurrentPage(1)
                    }
                    }
                >
                    <option value="stars">⭐ Stars</option>
                    <option value="name">📝 Name</option>
                    <option value="updated">🕒 Recently Updated</option>
                </select>

            </div>
    )
}

export default SearchRepo;