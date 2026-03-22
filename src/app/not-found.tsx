import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-carbon-black">
      <div className="text-center px-4">
        <div className="text-9xl font-display text-fire-red animate-fire-glow mb-4">404</div>
        <h1 className="font-display text-4xl text-white mb-4 tracking-wide">
          PÁGINA NO ENCONTRADA
        </h1>
        <p className="text-fog-gray text-lg mb-8 max-w-md mx-auto">
          Lo sentimos, la página que buscas no existe o ha sido movida.
        </p>
        <Link
          href="/"
          className="inline-block px-8 py-4 gradient-fire text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-fire-red/50 transition-all duration-300"
        >
          Volver al Inicio
        </Link>
      </div>
    </div>
  );
}
