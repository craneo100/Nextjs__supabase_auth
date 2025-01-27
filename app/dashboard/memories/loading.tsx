export default function Loading() {
  return (
    <div className="max-w-4xl mx-auto p-4 space-y-8 animate-pulse">
      <div className="h-8 w-48 bg-gray-200 rounded"></div>
      <div className="space-y-4">
        {[1,2,3].map(i => (
          <div key={i} className="h-32 bg-gray-200 rounded"></div>
        ))}
      </div>
    </div>
  )
}
