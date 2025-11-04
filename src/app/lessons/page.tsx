"use client";

import { useEffect, useState } from "react";
import type { Lessons } from "@/types/lessons";


interface Lesson {
  id: number;
  title: string;
  duration: string;
}

export default function LessonsPage() {
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  useEffect(() => {
    async function load() {
      setStatus("loading");
      setErrorMsg("");
      try {
        const res = await fetch("/api/lessons", { cache: "no-store" });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data: Lesson[] = await res.json();
        setLessons(data);
        setStatus("idle");
      } catch (err: unknown) {
        setStatus("error");
        setErrorMsg(err instanceof Error ? err.message : "Unknown error");
      }
    }
    load();
  }, []);

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Lessons (API + TypeScript)</h1>

      {status === "loading" && <p>Loading…</p>}
      {status === "error" && (
        <p className="text-red-600">Could not load lessons: {errorMsg}</p>
      )}

      <ul className="space-y-2">
        {lessons.map((l) => (
          <li
            key={l.id}
            className="border rounded-lg p-4 flex items-center justify-between"
          >
            <span className="font-medium">{l.title}</span>
            <span className="opacity-70">{l.duration}</span>
          </li>
        ))}
      </ul>
    </main>
  );
}
