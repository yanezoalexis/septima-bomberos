export default function PageHeader({ title }: { title: string }) {
  return (
    <div 
      className="bg-zinc-950 border-b border-zinc-800"
      style={{ paddingTop: '80px', paddingBottom: '48px' }}
    >
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-white">
          {title}
        </h1>
        <div className="w-20 h-1 gradient-fire mx-auto mt-6 rounded-full"></div>
      </div>
    </div>
  );
}
