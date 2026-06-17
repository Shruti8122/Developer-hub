function Error({ error, darkMode }) {
    return (
        <div
            className={`mt-4 p-3 rounded-lg ${darkMode
                    ? "bg-red-900 text-red-200"
                    : "bg-red-100 text-red-700"
                }`}
        >
            <p >
                {error}
            </p>
        </div>

    )
}

export default Error;