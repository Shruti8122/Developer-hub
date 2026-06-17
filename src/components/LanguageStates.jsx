function LanguageStates({ darkMode, repoList }) {

    const languageCounts = repoList.reduce(
        (acc, repo) => {
            if (!repo.language) {
                return acc;
            } else if (acc[repo.language]) {
                acc[repo.language] = acc[repo.language] + 1;
            } else {
                acc[repo.language] = 1;
            }
            return acc;
        }, {});
    const languages = Object.entries(languageCounts)
        .sort((a,b) => b[1] - a[1]);
    return (
        <div className={`mt-8 p-6 rounded-2xl border shadow-lg  ${darkMode
            ? "bg-gray-800 border-gray-700"
            : "bg-gray-50 border-gray-200"
            }`}>
            <h2 className="text-2xl font-bold text-yellow-600 mb-4">
                Top Languages
            </h2>
            <div className="grid grid-cols-3 gap-2 ">
                {
                    languages.map(
                        ([language, count]) => (
                            <div
                                key={language}
                                className={`p-5 rounded-xl border text-center shadow-md text-1xl ${darkMode
                                    ? "bg-gray-700 border-gray-600"
                                    : "bg-white border-gray-300"
                                    }`}
                            >
                                <span className={`${darkMode
                                    ? "text-gray-400"
                                    : "text-black"
                                    }`}
                                >{language} : 
                                </span>
                                <span className="font-bold"> {count} </span>
                            </div>
                        )
                    )
                }
            </div>
        </div>
    )
};

export default LanguageStates;