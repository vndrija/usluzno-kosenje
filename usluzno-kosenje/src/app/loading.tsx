export default function Loading() {
  return (
    <div className="min-h-screen bg-green-50">
      {/* Header Skeleton */}
      <div className="bg-green-600 text-white p-4 animate-pulse">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
          <div className="h-8 w-64 bg-green-500 rounded mb-4 sm:mb-0"></div>
          <div className="w-full sm:w-auto flex justify-center space-x-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-6 w-20 bg-green-500 rounded"></div>
            ))}
          </div>
        </div>
      </div>

      {/* Hero Skeleton */}
      <div className="bg-green-500 py-12 sm:py-20 animate-pulse">
        <div className="container mx-auto text-center px-4">
          <div className="h-12 w-3/4 mx-auto bg-green-400 rounded mb-4"></div>
          <div className="h-8 w-2/4 mx-auto bg-green-400 rounded"></div>
        </div>
      </div>

      {/* About Skeleton */}
      <div className="py-12 sm:py-16 px-4 animate-pulse">
        <div className="container mx-auto">
          <div className="h-10 w-48 mx-auto bg-gray-200 rounded mb-8"></div>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <div className="w-[400px] h-[400px] bg-gray-200 rounded-lg mx-auto"></div>
            </div>
            <div className="md:w-1/2 md:pl-8">
              <div className="h-4 bg-gray-200 rounded mb-4"></div>
              <div className="h-4 bg-gray-200 rounded mb-4"></div>
              <div className="h-4 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Skeleton */}
      <div className="bg-green-100 py-12 sm:py-16 px-4 animate-pulse">
        <div className="container mx-auto">
          <div className="h-10 w-48 mx-auto bg-gray-200 rounded mb-8"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white p-6 rounded-lg">
                <div className="h-6 w-3/4 bg-gray-200 rounded mb-4"></div>
                <div className="h-6 w-1/4 bg-gray-200 rounded mb-4"></div>
                <div className="h-4 bg-gray-200 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Experience Skeleton */}
      <div className="py-12 sm:py-16 px-4 animate-pulse">
        <div className="container mx-auto">
          <div className="h-10 w-48 mx-auto bg-gray-200 rounded mb-8"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-[350px] bg-gray-200 rounded-lg"></div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Skeleton */}
      <div className="bg-green-800 py-4 px-4 animate-pulse">
        <div className="container mx-auto">
          <div className="h-4 w-64 bg-green-700 rounded mx-auto"></div>
        </div>
      </div>
    </div>
  )
} 