function ProfileCard({ userData, darkMode }) {
    return (
        <div
            className={`mt-8 rounded-xl p-6 w-96 mx-auto shadow-lg border ${darkMode
                    ? "bg-gray-800 border-gray-700"
                    : "bg-white border-gray-200"
                }`}
        >
            <img
                src={userData.avatar_url}
                alt={userData.login}
                className="w-32 h-32 rounded-full mx-auto mb-4"
            />

            <p>Name : {userData.name}</p>
            <p>Username : {userData.login}</p>
            <p>Followers : {userData.followers}</p>
            <p>Following : {userData.following}</p>
            <p>Public Repositories : {userData.public_repos}</p>

        </div>
    )
};

export default ProfileCard;