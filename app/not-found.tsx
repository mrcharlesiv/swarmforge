export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-cyan-400 mb-4">404</h1>
        <p className="text-slate-400 text-lg mb-6">Page not found</p>
        <a href="/" className="text-cyan-400 hover:text-cyan-300 underline">
          ← Back to home
        </a>
      </div>
    </div>
  )
}
