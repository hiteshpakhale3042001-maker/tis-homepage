function AnimatedToggle({ isDark, setIsDark }) {
  return (
    <button
      onClick={() => setIsDark(!isDark)}
      aria-label="Toggle dark mode"
      className="relative flex h-9 w-16 items-center rounded-full bg-gray-200 p-1 transition-colors duration-300 dark:bg-gray-700"
    >
      <span
        className={`flex h-7 w-7 items-center justify-center rounded-full bg-white text-sm shadow-md transition-transform duration-300 ${
          isDark ? "translate-x-7" : "translate-x-0"
        }`}
      >
        {isDark ? "☀️" : "🌙"}
      </span>
    </button>
  );
}

export default AnimatedToggle;