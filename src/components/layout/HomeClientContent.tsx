'use client';

import SearchBar from '@/components/search/SearchBar';
import { MoviifyLogo } from '@/components/icons/MoviifyLogo';

export default function HomeClientContent() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center min-h-screen bg-background text-foreground">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      <div className="relative z-10 space-y-6 px-4">
        <MoviifyLogo className="w-96 md:w-[32rem] h-auto text-primary mx-auto" />
        <div className="max-w-xl mx-auto flex flex-col items-center gap-4">
          <p className="text-xl md:text-2xl text-foreground/80">
            Discover your next favorite film.
          </p>
          <SearchBar />
        </div>
      </div>
    </section>
  );
}
