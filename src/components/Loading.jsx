function Loading({ darkMode }) {
    return (
        <div className={`mt-4 ${darkMode
                ? "text-gray-300"
                : "text-gray-600"
            }`}>
            <p>
                Loading Profile Please Wait ...
            </p>
        </div>
    )
}

export default Loading;