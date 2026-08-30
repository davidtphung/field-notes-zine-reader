"use client";

import {
  createContext,
  createElement,
  useCallback,
  useContext,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";

const STORAGE_KEY = "field-notes.saved.v1";
const CHANGE_EVENT = "field-notes-bookmarks";

type BookmarksContextValue = {
  ready: boolean;
  saved: string[];
  isSaved: (slug: string) => boolean;
  toggle: (slug: string) => void;
  count: number;
};

const BookmarksContext = createContext<BookmarksContextValue | null>(null);

function readStorage(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((item): item is string => typeof item === "string");
  } catch {
    return [];
  }
}

function subscribe(callback: () => void) {
  const onStorage = (event: StorageEvent) => {
    if (event.key === STORAGE_KEY || event.key === null) callback();
  };
  window.addEventListener("storage", onStorage);
  window.addEventListener(CHANGE_EVENT, callback);
  return () => {
    window.removeEventListener("storage", onStorage);
    window.removeEventListener(CHANGE_EVENT, callback);
  };
}

function getSnapshot() {
  return JSON.stringify(readStorage());
}

function getServerSnapshot() {
  return "[]";
}

function writeStorage(next: string[]) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

export function BookmarksProvider({ children }: { children: ReactNode }) {
  const snapshot = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );
  const saved = useMemo(() => JSON.parse(snapshot) as string[], [snapshot]);

  const toggle = useCallback((slug: string) => {
    const current = readStorage();
    const next = current.includes(slug)
      ? current.filter((item) => item !== slug)
      : [...current, slug];
    writeStorage(next);
  }, []);

  const value = useMemo<BookmarksContextValue>(
    () => ({
      ready: true,
      saved,
      isSaved: (slug: string) => saved.includes(slug),
      toggle,
      count: saved.length,
    }),
    [saved, toggle],
  );

  return createElement(BookmarksContext.Provider, { value }, children);
}

export function useBookmarks() {
  const context = useContext(BookmarksContext);
  if (!context) {
    throw new Error("useBookmarks must be used within BookmarksProvider");
  }
  return context;
}
