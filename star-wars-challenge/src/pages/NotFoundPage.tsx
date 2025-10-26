import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-gray-200 px-4">
      <h1 className="text-6xl font-bold text-[#B026FF] mb-2 animate-pulse">
        404
      </h1>

      <p className="text-gray-400 mb-6 text-center">
        Oops... The page you’re looking for doesn’t exist.
      </p>

      <Link
        to="/"
        className="px-5 py-2.5 rounded-lg text-sm font-medium text-[#747bff] hover:text-gray-400 hover:underline transition-all duration-200 border border-neutral-800 hover:border-gray-700"
      >
        ← Back to Home
      </Link>
    </div>
  );
}
