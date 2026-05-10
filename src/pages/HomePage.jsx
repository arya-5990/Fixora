// src/pages/HomePage.jsx

export default function HomePage() {
  return (
    <main className="page-container animate-slide-up">
      <section className="min-h-[70vh] flex flex-col items-center justify-center text-center gap-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm text-primary-300 mb-2">
          <span className="w-2 h-2 rounded-full bg-primary-400 animate-pulse-slow" />
          Production Ready · Firebase · Tailwind
        </div>

        <h1 className="text-5xl sm:text-6xl font-display font-extrabold tracking-tight leading-tight">
          Welcome to{' '}
          <span className="gradient-text">Fixora</span>
        </h1>

        <p className="text-lg text-white/60 max-w-xl">
          A modern React + Tailwind + Firebase starter. Authentication, Firestore,
          Cloud Functions, and a clean design system — ready to build on.
        </p>

        <div className="flex flex-wrap gap-3 justify-center mt-2">
          <a href="/dashboard" className="btn-primary">Go to Dashboard</a>
          <a href="/login"     className="btn-secondary">Sign In</a>
        </div>
      </section>
    </main>
  );
}
