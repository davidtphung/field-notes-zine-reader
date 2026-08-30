"use client";

import { useState, useSyncExternalStore } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const STORAGE_KEY = "field-notes.subscribe.v1";
const CHANGE_EVENT = "field-notes-subscribe";

function readStoredEmail() {
  if (typeof window === "undefined") return "";
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return "";
    const parsed = JSON.parse(raw) as { email?: string };
    return parsed.email ?? "";
  } catch {
    return "";
  }
}

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(CHANGE_EVENT, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(CHANGE_EVENT, callback);
  };
}

export function SubscribeForm({
  id = "subscribe",
  compact = false,
}: {
  id?: string;
  compact?: boolean;
}) {
  const storedEmail = useSyncExternalStore(
    subscribe,
    readStoredEmail,
    () => "",
  );
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const value = email.trim().toLowerCase();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    if (!valid) {
      setError("Enter a working email, then we will keep it on this device only.");
      return;
    }
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ email: value, at: new Date().toISOString() }),
    );
    window.dispatchEvent(new Event(CHANGE_EVENT));
    setError("");
    setEmail("");
  }

  return (
    <form
      onSubmit={onSubmit}
      className={compact ? "grid gap-3" : "grid gap-4"}
      noValidate
    >
      <div className="grid gap-2">
        <Label htmlFor={id} className="kicker">
          Email for the next issue
        </Label>
        <div className="flex flex-col gap-2 sm:flex-row">
          <Input
            id={id}
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            placeholder="you@example.com"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
              if (error) setError("");
            }}
            aria-invalid={Boolean(error)}
            aria-describedby={`${id}-help`}
            className="bg-paper"
          />
          <Button type="submit" className="bg-kelp text-paper hover:bg-kelp/90 sm:w-auto">
            Keep me posted
          </Button>
        </div>
      </div>
      <p
        id={`${id}-help`}
        className={error ? "text-sm text-clay" : "text-sm text-ink/70"}
        role={error ? "alert" : undefined}
      >
        {error
          ? error
          : storedEmail
            ? `We will write to ${storedEmail} when the next issue ships.`
            : "Stored on this browser only. No account, no store, no list we can sell."}
      </p>
    </form>
  );
}
