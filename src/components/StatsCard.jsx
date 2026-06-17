function StatsCard({
    icon,
    value,
    label,
    darkMode
}){
    return(
        <div
                className={`p-4 rounded-xl border text-center shadow-md transition-all duration-200 hover:scale-105 ${
                    darkMode
                        ? "bg-gray-700 border-yellow-500"
                        : "bg-white border-yellow-300"
                }`}
            >
                <p className="text-3xl mb-2">{icon}</p>

                <h3 className="text-2xl font-bold">
                    {value}
                </h3>

                <p
                    className={`text-sm ${
                        darkMode
                            ? "text-gray-300"
                            : "text-gray-500"
                    }`}
                >
                    {label}
                </p>
            </div>

    )
}

export default StatsCard;