export function StatusDot({ className = '' }: { className?: string }) {
  return (
    <span className={`flex h-2 w-2 relative ${className}`}>
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
    </span>
  )
}

