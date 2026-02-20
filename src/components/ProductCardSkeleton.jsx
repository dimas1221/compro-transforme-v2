import Skeleton from "./Skeleton";

export default function ProductCardSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      <div>
        <Skeleton className="h-6 w-2/3 mb-4" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-5/6 mb-6" />
        <Skeleton className="h-9 w-32 rounded-md" />
      </div>

      <Skeleton className="h-64 w-full rounded-xl" />
    </div>
  );
}
