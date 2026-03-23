export default function PageHeader({ title }: { title: string }) {
  return (
    <div className="bg-zinc-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-red-600/5 via-transparent to-transparent"></div>
      <div className="absolute inset-0 section-pattern opacity-50"></div>
      
      <div className="relative z-10 text-center py-24 px-4">
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl text-white">
          {title}
        </h1>
        <div className="w-24 h-1 gradient-fire mx-auto mt-8 rounded-full"></div>
      </div>
      
      <div className="h-px bg-gradient-to-r from-transparent via-red-600/50 to-transparent"></div>
    </div>
  );
}
