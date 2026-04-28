import { profile } from "@/lib/profile";

export function Footer() {
  return (
    <footer className="container-shell border-t border-line py-8 text-xs uppercase tracking-[0.2em] text-muted">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 {profile.name}</p>
        <p>Software · Systems · Intelligence</p>
      </div>
    </footer>
  );
}
