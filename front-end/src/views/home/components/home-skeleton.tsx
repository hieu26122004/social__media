import React from "react";
import { Skeleton } from "@/components/common/skeleton";

const WeatherCardSkeleton: React.FC = () => (
  <article className="bg-primary h-[450px] w-full p-5 border rounded mb-5">
    <div className="h-[220px] flex items-center justify-center">
      <div className="w-full flex flex-col items-center">
        <Skeleton className="size-[60px] rounded-full mb-5" />
        <Skeleton className="w-5/12 h-3 mb-3" />
        <Skeleton className="w-10/12 h-3 mb-3" />
      </div>
    </div>
    <div className="h-44 flex items-center justify-center">
      <div className="w-full flex flex-col items-center">
        <Skeleton className="w-full h-[85px] mb-8" />
        <Skeleton className="w-11/12 h-3 mb-3" />
        <Skeleton className="w-[44%] h-3" />
      </div>
    </div>
  </article>
);

const PostSkeletonItem: React.FC = () => (
  <article className="w-full p-5 bg-primary border rounded space-y-5">
    <div className="flex items-center justify-start gap-5">
      <Skeleton className="size-12 rounded-full flex-shrink-0" />
      <div className="flex-1 space-y-3">
        <Skeleton className="w-3/5 h-3" />
        <Skeleton className="w-2/5 h-3" />
      </div>
    </div>
    <Skeleton className="w-full aspect-video" />
    <div className="flex items-center justify-start gap-3">
      <Skeleton className="size-11 rounded-full flex-shrink-0" />
      <div className="flex-1 space-y-3">
        <Skeleton className="w-1/4 h-3" />
        <Skeleton className="w-1/5 h-3" />
      </div>
    </div>
  </article>
);

const SuggestedUserSkeleton: React.FC = () => {
  const userSuggestCount = 5;

  return (
    <article className="w-full p-5 bg-primary border rounded">
      <div className="h-12 w-full flex items-center justify-start">
        <Skeleton className="w-1/2 h-3" />
      </div>
      {Array.from({ length: userSuggestCount }).map((_, index) => (
        <div key={index} className="h-20 flex items-center justify-start gap-3">
          <Skeleton className="size-11 rounded-full flex-shrink-0" />
          <div className="flex-1 space-y-3">
            <Skeleton className="w-3/4 h-3" />
            <Skeleton className="w-1/2 h-3" />
          </div>
        </div>
      ))}
    </article>
  );
};

const AdsCardSkeleton: React.FC = () => (
  <article className="w-full p-5 bg-primary border rounded">
    <div className="h-80 w-full flex flex-col items-center justify-center">
      <Skeleton className="size-12 rounded-full mb-5" />
      <Skeleton className="w-1/3 h-3 mb-3" />
      <Skeleton className="w-4/5 h-3 mb-3" />
      <Skeleton className="w-3/5 h-3 mb-3" />
      <Skeleton className="w-32 h-9 mt-6" />
    </div>
  </article>
);

const HomeSkeleton: React.FC = () => {
  const postSkeletonCount = 5;

  return (
    <div className="h-full w-full grid grid-cols-12 overflow-hidden px-2 py-4">
      <aside className="hidden md:block md:col-span-3">
        <WeatherCardSkeleton />
      </aside>
      <section
        className="col-span-full md:col-span-6 flex flex-col gap-4 mx-0 sm:mx-4"
        aria-label="Main content skeleton"
      >
        <article className="w-full h-56 p-5 bg-primary border rounded">
          <div className="flex items-center gap-7 mb-8">
            <Skeleton className="flex-1 h-4 rounded" />
            <Skeleton className="flex-1 h-4 rounded" />
            <Skeleton className="flex-1 h-4 rounded" />
          </div>
          <div className="h-24 flex items-center gap-5">
            <Skeleton className="size-11 rounded-full flex-shrink-0" />
            <div className="flex-1 space-y-3">
              <Skeleton className="w-5/12 h-3" />
              <Skeleton className="w-1/4 h-3" />
            </div>
          </div>
        </article>
        <div className="space-y-5">
          {Array.from({ length: postSkeletonCount }).map((_, index) => (
            <PostSkeletonItem key={index} />
          ))}
        </div>
      </section>
      <aside
        className="hidden md:block md:col-span-3 space-y-6"
        aria-label="Sidebar skeleton"
      >
        <SuggestedUserSkeleton />
        <AdsCardSkeleton />
      </aside>
    </div>
  );
};

export default HomeSkeleton;
