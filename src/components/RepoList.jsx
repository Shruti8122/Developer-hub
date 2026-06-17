import { useState } from "react";
import RepositoryStats from "./RepositoryStats";
import RepoCard from "./RepoCard";
import Pagination from "./Pagination";
import SearchRepo from "./SearchRepo";
import TopRepo from "./TopRepo";

function RepoList({ repoList, darkMode, favorites, handleFavorite }) {
    const [searchRepo, SetSearchRepo] = useState("");
    const [sortBy, setSortBy] = useState("stars");
    const [currentPage, setCurrentPage] = useState(1);

    const reposPerPage = 6;

    const startIndex = (currentPage - 1) * reposPerPage;
    const endIndex = startIndex + reposPerPage;

    const filterRepo = repoList.filter(
        (repo) => repo.name.toLowerCase().includes(searchRepo.toLowerCase())
    )

    const sortedRepos = [...filterRepo];

    if (sortBy === "stars") {
        sortedRepos.sort((a, b) => b.stargazers_count - a.stargazers_count);
    }
    else if (sortBy === "name") {
        sortedRepos.sort((a, b) => a.name.localeCompare(b.name));
    }
    else if (sortBy === "updated") {
        sortedRepos.sort(
            (a, b) =>
                new Date(b.updated_at) -
                new Date(a.updated_at)
        );
    }

    const topRepo =
        filterRepo.length > 0
            ? filterRepo.reduce((acc, repo) =>
                acc.stargazers_count > repo.stargazers_count
                    ? acc
                    : repo
            )
            : null;
    const totalRepos = repoList.length;
    const totalForks = repoList.reduce(
        (acc, repo) => {
            return acc + repo.forks_count;
        }, 0);
    const totalStars = repoList.reduce(
        (acc, repo) => {
            return acc + repo.stargazers_count;
        }, 0);

    const currentRepos = sortedRepos.slice(
        startIndex,
        endIndex
    );

    const totalPages = Math.ceil(
        sortedRepos.length / reposPerPage
    );

    return (
        <div
            className={`p-4 rounded-lg border shadow-md mb-3 max-w-5xl mx-auto ${darkMode
                ? "bg-gray-800 border-gray-700"
                : "bg-white border-gray-200"
                }`}
        >
            <SearchRepo darkMode={darkMode} 
            setCurrentPage={setCurrentPage} 
            setSortBy={setSortBy}
            searchRepo={searchRepo}
            SetSearchRepo={SetSearchRepo}
            sortBy={sortBy}/>
            <div>
                <p className="mt-3 mb-4 text-sm">
                    Showing {sortedRepos.length} {
                        sortedRepos.length === 1
                            ? "repository"
                            : "repositories"
                    }
                </p>
            </div>
            {
                repoList.length > 0 && (
                    <RepositoryStats totalRepos={totalRepos} totalForks={totalForks} totalStars={totalStars} darkMode={darkMode} />
                )
            }
            {
                topRepo && 
                <TopRepo darkMode={darkMode} topRepo={topRepo}/>
            }
            {
                currentRepos.length >0 ?
                (currentRepos.map((repo) => {
                    const isFavorite = favorites.some(
                        item => item.id === repo.id
                    );

                    return (
                        <div key={repo.id}>
                            <RepoCard
                            repo={repo}
                            darkMode={darkMode}
                            isFavorite={isFavorite}
                            handleFavorite={handleFavorite}
                        />
                        </div>
                    );
                })) 
                :(
                    <p>No repositories found 🔍</p>
                )
            }
            <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} darkMode={darkMode} totalPages={totalPages} />
        </div>
    );
}

export default RepoList;