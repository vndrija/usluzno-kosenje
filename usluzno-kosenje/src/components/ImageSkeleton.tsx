export default function ImageSkeleton({ className }: { className?: string }) {
  return (
    <div className={`animate-pulse bg-gray-200 rounded-lg ${className}`}>
      <div className="w-full h-full bg-gray-300/50"></div>
    </div>
  )
} 