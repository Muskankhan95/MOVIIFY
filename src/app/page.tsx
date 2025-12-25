import { Suspense } from 'react';
import { Sparkles, TrendingUp } from 'lucide-react';
import MovieGrid from '@/components/movies/MovieGrid';
import HomeClientContent from '@/components/layout/HomeClientContent';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section with interactive elements is now a Client Component */}
        <HomeClientContent />

        {/* Trending & Recommendations - Data fetching happens on the server */}
        <section className="py-8 md:py-16 px-4 md:px-8 lg:px-16 space-y-12">
          {/* Trending */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <TrendingUp className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold font-headline">Trending</h2>
            </div>
            <Suspense
              fallback={
                <div className="h-96 w-full bg-secondary animate-pulse rounded-lg" />
              }
            >
              <MovieGrid path="trending/movie/week" horizontal={true} />
            </Suspense>
          </div>

          {/* Recommendations */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <Sparkles className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold font-headline">
                Top Picks for You
              </h2>
            </div>
            <Suspense
              fallback={
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="space-y-2">
                      <div className="aspect-[2/3] w-full bg-secondary animate-pulse rounded-lg" />
                    </div>
                  ))}
                </div>
              }
            >
              <MovieGrid path="discover/movie" />
            </Suspense>
          </div>
        </section>
      </main>
    </div>
  );
}
