import { useState, useEffect } from "react";
import ProfileCard from "./ProfileCard";
import Loading from "./Loading";
import Error from "./Error";
import RepoList from "./RepoList";
import SearchHistory from "./SearchHistory";
import FavoritesList from "./FavoritesList";
import GitHubAnalytics from "./GitHubAnalytics";
import LanguageStates from "./LanguageStates";

function Hero({ darkMode, favorites, handleRemoveFavorite, handleFavorite, activeView }) {

    const [username, setUsername] = useState("");
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [repoList, setRepoList] = useState([]);
    const [searchHistory, setSearchHistory] = useState([]);

    const handleSearch = async (searchedUser = username) => {

        if (!searchedUser.trim()) {
            setError("Please enter a GitHub username");
            return;
        } else {
            setLoading(true);
            const updatedHistory = searchHistory.filter(
                (item) => item !== searchedUser
            )
            setSearchHistory([searchedUser, ...updatedHistory]);

            const response = await fetch(
                `https://api.github.com/users/${searchedUser}`
            );

            const repoResponse = await fetch(
                `https://api.github.com/users/${searchedUser}/repos`
            );

            if (!response.ok) {
                setError("User not found");
                setUserData(null);
                setLoading(false);
                setRepoList([]);
                return;
            }

            const data = await response.json();
            const repoData = await repoResponse.json();
            setRepoList(repoData);
            setError("");
            setLoading(false);
            setUserData(data);
        }
    };

    const handleHistoryClick = (searchedUser) => {
        setUsername(searchedUser);
        handleSearch(searchedUser);
    };

    const handleHistoryDelete = (deleteIndex) => {
        const updatedHistory = searchHistory.filter(
            (_, index) => index !== deleteIndex
        );
        setSearchHistory(updatedHistory);
    };



    return (
        <div
            className={`min-h-screen text-center pt-16 ${darkMode
                ? "bg-gray-900 text-white"
                : "bg-white text-black"
                }`}
        >
            <h1 className="text-4xl font-bold text-yellow-500">
                Explore GitHub Profiles
            </h1>
            <p
                className={`text-lg mt-4 ${darkMode
                    ? "text-gray-300"
                    : "text-gray-600"
                    }`}
            >
                Search developers and analyze repositories
            </p>
            <div className="flex justify-center items-center gap-3 mt-6">
                <input
                    type="text"
                    placeholder="Enter GitHub username"
                    value={username}
                    onChange={(e) => {
                        setUsername(e.target.value)
                        setError("")}
                    }
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            handleSearch();
                        }
                    }}
                    className={`border p-3 rounded-lg w-80 ${darkMode
                        ? "bg-gray-800 text-white border-gray-600"
                        : "bg-white text-black"
                        }`}
                />
                <button
                    onClick={() => handleSearch()}
                    disabled={loading}
                    className="bg-yellow-500 text-white px-6 py-3 rounded-lg cursor-pointer disabled:opacity-50"
                >
                    {loading ? "loading" : "Search"}
                </button>
            </div>
            {
                loading && (
                    <Loading darkMode={darkMode} />
                )
            }
            {
                error && (
                    <Error error={error} darkMode={darkMode} />
                )
            }
            {
                activeView === "analysis" && (
                    <>
                        {
                            userData && (
                                <ProfileCard
                                    userData={userData}
                                    darkMode={darkMode}
                                />
                            )
                        }

                        {
                            repoList.length > 0 && (
                                <RepoList
                                    repoList={repoList}
                                    darkMode={darkMode}
                                    favorites={favorites}
                                    handleFavorite={handleFavorite}
                                />
                            )
                        }

                        {
                            userData && (
                                <GitHubAnalytics
                                    userData={userData}
                                    darkMode={darkMode}
                                />
                            )
                        }

                    </>
                )
            }
            <SearchHistory searchHistory={searchHistory} handleHistoryClick={handleHistoryClick} handleHistoryDelete={handleHistoryDelete} darkMode={darkMode} />
            {
                activeView === "favorites" && (
                    <FavoritesList
                        favorites={favorites}
                        handleRemoveFavorite={handleRemoveFavorite}
                        darkMode={darkMode}
                    />
                )
            }

            {
                activeView === "languages" &&
                repoList.length > 0 && (
                    <LanguageStates
                        darkMode={darkMode}
                        repoList={repoList}
                    />
                )
            }
        </div>
    );
}

export default Hero;