const LoadingPage = () => {
  return (
    <div className="flex min-h-[75vh] items-center justify-center bg-gray-50">
      <div className="flex flex-col items-center">
        <div className="relative flex h-20 w-20 items-center justify-center">
          <span className="absolute h-20 w-20 animate-spin rounded-full border-4 border-gray-200 border-t-red-600"></span>

          <span className="text-xl font-black text-red-600">BN24</span>
        </div>

        <p className="mt-5 text-sm font-medium text-gray-600">
          Loading news...
        </p>
      </div>
    </div>
  );
};

export default LoadingPage;
