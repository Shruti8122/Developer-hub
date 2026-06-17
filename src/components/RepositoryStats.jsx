import StatsCard from "./StatsCard";

function RepositoryStats({
    totalRepos,
    totalStars,
    totalForks,
    darkMode
}) {
    const Cards=[
        {
            icon:'📦',
            value: totalRepos,
            label: "Repositories"
        },
        {
            icon:'⭐',
            value: totalStars,
            label: "Total Stars"
        },
        {
            icon:'🍴',
            value: totalForks,
            label: "Total Forks"
        }
    ];
    return (
        <div className="grid grid-cols-3 gap-4 mt-6">
            {
                Cards.map(
                (repo,index) => (
                    <div key={index}>
                        <StatsCard icon={repo.icon} label={repo.label} value={repo.value} darkMode={darkMode} />
                    </div>
                )
            )
            }
        </div>
    );
}

export default RepositoryStats;