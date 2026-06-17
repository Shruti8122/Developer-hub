function Pagination({ currentPage, totalPages,setCurrentPage,darkMode}) {
    return (
        <div className="flex justify-center items-center gap-2 mt-8 flex-wrap">

            <button
                disabled={currentPage === 1}
                onClick={() => {
                    if (currentPage > 1) {
                        setCurrentPage(currentPage - 1);
                    }
                }}
                className={`px-4 py-2 rounded-lg border transition-all duration-200
        ${currentPage === 1
                        ? "opacity-50 cursor-not-allowed"
                        : "hover:scale-105 hover:bg-yellow-500 hover:text-white"
                    }`}
            >
                ← Previous
            </button>

            {
                [...Array(totalPages).keys()].map((page) => (
                    <button
                        key={page}
                        onClick={() => setCurrentPage(page + 1)}
                        className={`px-4 py-2 rounded-lg border transition-all duration-200 hover:scale-105
                ${currentPage === page + 1
                                ? "bg-yellow-500 text-white border-yellow-500"
                                : darkMode
                                    ? "bg-gray-700 border-gray-600 text-white"
                                    : "bg-white border-gray-300"
                            }`}
                    >
                        {page + 1}
                    </button>
                ))
            }

            <button
                disabled={currentPage === totalPages}
                onClick={() => {
                    if (currentPage < totalPages) {
                        setCurrentPage(currentPage + 1);
                    }
                }}
                className={`px-4 py-2 rounded-lg border transition-all duration-200
        ${currentPage === totalPages
                        ? "opacity-50 cursor-not-allowed"
                        : "hover:scale-105 hover:bg-yellow-500 hover:text-white"
                    }`}
            >
                Next →
            </button>

        </div>
    )
}

export default Pagination;