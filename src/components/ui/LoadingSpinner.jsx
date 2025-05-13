const LoadingSpinner = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="w-16 h-16 border-4 border-neutral-300 border-t-accent-500 rounded-full animate-spin"></div>
      <p className="mt-4 text-neutral-600">Loading weather data...</p>
    </div>
  )
}

export default LoadingSpinner