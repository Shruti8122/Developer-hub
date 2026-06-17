import StatsCard from "./StatsCard";

function GitHubAnalytics({ userData, darkMode }) {

    const analyticsData = [
        {
            icon: "👥",
            value: userData.followers,
            label: "Followers"
        },
        {
            icon: "👤",
            value: userData.following,
            label: "Following"
        },
        {
            icon: "📦",
            value: userData.public_repos,
            label: "Public Repositories"
        },
        {
            icon: "📅",
            value: new Date(userData.created_at).getFullYear(),
            label: "GitHub Since"
        }
    ];

    return (
        <div className={`mt-8 p-6 rounded-2xl border shadow-lg  ${darkMode
            ? "bg-gray-800 border-gray-700"
            : "bg-gray-50 border-gray-200"
            }`}>
            <h2 className="text-2xl font-bold text-yellow-600 mb-4">
                GitHub Analytics
            </h2>
            <div className="grid grid-cols-2 gap-4 mt-6">
                {
                    analyticsData.map(
                        (data,index) => (
                            <div key={index}>
                                <StatsCard icon={data.icon} value={data.value} label={data.label} darkMode={darkMode} />
                            </div>
                        ))
                }
            </div>
        </div>
    )
}

export default GitHubAnalytics;