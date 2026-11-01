"use client";

import { useState, type FormEvent } from "react";

type Strings = {
  name: string;
  email: string;
  message: string;
  send: string;
  sending: string;
  sent: string;
  failed: string;
};

const fieldClass =
  "mt-1.5 w-full rounded-lg border border-border bg-surface px-3 py-2 text-foreground focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-accent";

export function ContactForm({
  strings,
  formspreeId,
  toEmail,
}: {
  strings: Strings;
  formspreeId: string;
  toEmail: string;
}) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "failed">("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");

    if (!formspreeId) {
      const subject = encodeURIComponent(`Portfolio message from ${name}`);
      const body = encodeURIComponent(`${message}\n\n${name}\n${email}`);
      window.location.href = `mailto:${toEmail}?subject=${subject}&body=${body}`;
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      if (!res.ok) throw new Error("bad response");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("failed");
    }
  }

  const statusText =
    status === "sending"
      ? strings.sending
      : status === "sent"
        ? strings.sent
        : status === "failed"
          ? strings.failed
          : "";

  return (
    <form onSubmit={onSubmit} className="space-y-4 rounded-2xl border border-border bg-surface p-6">
      <div>
        <label htmlFor="cf-name" className="text-sm font-medium">
          {strings.name}
        </label>
        <input id="cf-name" name="name" type="text" required autoComplete="name" className={fieldClass} />
      </div>
      <div>
        <label htmlFor="cf-email" className="text-sm font-medium">
          {strings.email}
        </label>
        <input id="cf-email" name="email" type="email" required autoComplete="email" className={fieldClass} />
      </div>
      <div>
        <label htmlFor="cf-message" className="text-sm font-medium">
          {strings.message}
        </label>
        <textarea id="cf-message" name="message" required rows={5} className={fieldClass} />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="rounded-lg bg-accent px-5 py-2.5 font-medium text-white hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:opacity-60"
      >
        {status === "sending" ? strings.sending : strings.send}
      </button>
      <p
        aria-live="polite"
        className={`text-sm ${status === "failed" ? "text-red-600 dark:text-red-400" : "text-muted"}`}
      >
        {statusText}
      </p>
    </form>
  );
}
