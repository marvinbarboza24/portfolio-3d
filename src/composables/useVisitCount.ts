import { ref } from "vue";

const count = ref<number | null>(null);
let started = false;

const load = async () => {
  try {
    const already = sessionStorage.getItem("marvin-visit-counted") === "1";
    const response = await fetch("/api/visits", { method: already ? "GET" : "POST" });
    if (!response.ok) return;

    const data = (await response.json()) as { count?: unknown };
    if (typeof data.count === "number" && Number.isFinite(data.count)) {
      count.value = data.count;
      sessionStorage.setItem("marvin-visit-counted", "1");
    }
  } catch {
    // Local Vite has no Pages Function, so the counter stays hidden.
  }
};

export const useVisitCount = () => {
  if (!started) {
    started = true;
    void load();
  }

  return count;
};
