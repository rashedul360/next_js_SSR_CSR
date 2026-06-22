const loading = () => {
  return (
    <div className="flex flex-wrap gap-4">
      {Array.from({ length: 10 }).map((_, i) => (
        <div
          key={i}
          className="w-72 rounded-2xl shadow-lg p-4 bg-white flex items-center gap-4 animate-pulse"
        >
          <div className="w-12 h-12 rounded-full bg-gray-300" />

          <div className="flex-1 space-y-2">
            <div className="h-4 bg-gray-300 rounded w-3/4" />

            <div className="h-3 bg-gray-200 rounded w-1/2" />

            <div className="h-3 bg-gray-200 rounded w-2/3" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default loading;
