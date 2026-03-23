import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-950 px-4">
      <div className="text-center">
        <div className="text-7xl sm:text-8xl font-display text-red-500 animate-fire-glow mb-4">404</div>
        <h1 className="font-display text-3xl sm:text-4xl text-white mb-4">PÁGINA NO ENCONTRADA</h1>
        <p className="text-zinc-500 mb-8">Lo sentimos, la página que buscas no existe.</p>
        <Link href="/" className="inline-block px-8 py-4 gradient-fire text-white font-semibold rounded-lg">Volver al Inicio</Link>
      </div>
    </div>
  );
}
