function TopRepo({topRepo,darkMode}){
    return(
        <div
                        className={` mt-4 mb-6 p-4 rounded-xl border ${darkMode
                            ? "bg-gray-700 border-gray-600"
                            : "bg-yellow-50 border-yellow-200"
                            }`}
                    >
                        <h3 className="text-xl font-bold text-yellow-500 mb-2">
                            🏆 Top Repository
                        </h3>

                        <p className="font-semibold text-lg">
                            {topRepo.name}
                        </p>

                        <p className="mt-1">
                            ⭐ {topRepo.stargazers_count} stars
                        </p>
                    </div>
    )
}

export default TopRepo;