const ItemsCardSkeleton = () => {
    return (
        <div className="card bg-base-100 border border-base-200 rounded-2xl animate-pulse">

            {/* Image Skeleton */}
            <div className="relative p-6 bg-base-200 rounded-t-2xl">
                <div className="absolute top-4 right-4 h-5 w-12 rounded badge bg-base-300"></div>

                <div className="h-40 w-full bg-base-300 rounded-xl"></div>
            </div>

            {/* Content Skeleton */}
            <div className="card-body p-5 space-y-4">
                {/* Title */}
                <div className="h-4 w-3/4 bg-base-300 rounded"></div>

                {/* Price + Button */}
                <div className="flex items-center justify-between mt-3">
                    <div className="h-6 w-20 bg-base-300 rounded"></div>
                    <div className="h-9 w-28 bg-base-300 rounded-lg"></div>
                </div>
            </div>
        </div>
    );
};

export default ItemsCardSkeleton;
