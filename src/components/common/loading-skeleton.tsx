export function LoadingSkeleton() {
  return (
    <div className="space-y-4">
      <div className="bg-muted h-8 w-52 animate-pulse rounded" />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="bg-muted h-36 animate-pulse rounded-xl" />
        ))}
      </div>

      <div className="bg-muted h-80 animate-pulse rounded-xl" />
    </div>
  );
}
