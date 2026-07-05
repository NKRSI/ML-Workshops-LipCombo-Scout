export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh]">
      <div className="animate-pulse flex flex-col items-center">
        <div className="h-12 w-12 rounded-full bg-pink-200 mb-4"></div>
        <div className="h-8 w-64 bg-pink-200 rounded mb-2"></div>
        <div className="h-6 w-48 bg-pink-200 rounded mb-8"></div>
        
        <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6 space-y-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-12 bg-pink-100 rounded-lg"></div>
          ))}
          
          <div className="h-12 bg-pink-200 rounded-xl mt-4"></div>
        </div>
      </div>
    </div>
  );
}