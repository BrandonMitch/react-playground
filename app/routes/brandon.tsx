import type { Route } from "./+types/brandon";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Brandon" }];
}

export default function BrandonPage() {
  return (
    <main style={{ padding: "2rem" }}>
      <h1>Brandon</h1>
      <p>This page lives at /brandon.</p>
    </main>
  );
}