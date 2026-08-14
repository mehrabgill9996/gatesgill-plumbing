"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/Button";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    console.log("Contact form:", Object.fromEntries(data.entries()));
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-slate-line bg-white p-8 text-center shadow-soft">
        <p className="font-display text-2xl font-bold text-ink">Message sent</p>
        <p className="mt-2 text-slate-text">
          Thanks for reaching out. We&apos;ll get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-4 rounded-2xl border border-slate-line bg-white p-6 shadow-soft sm:p-8"
    >
      <label className="block">
        <span className="mb-1.5 block text-sm font-medium text-ink">Name</span>
        <input
          name="name"
          required
          className="w-full rounded-md border border-slate-line px-4 py-3 outline-none ring-copper focus:ring-2"
        />
      </label>
      <label className="block">
        <span className="mb-1.5 block text-sm font-medium text-ink">Email</span>
        <input
          name="email"
          type="email"
          required
          className="w-full rounded-md border border-slate-line px-4 py-3 outline-none ring-copper focus:ring-2"
        />
      </label>
      <label className="block">
        <span className="mb-1.5 block text-sm font-medium text-ink">Phone</span>
        <input
          name="phone"
          type="tel"
          required
          className="w-full rounded-md border border-slate-line px-4 py-3 outline-none ring-copper focus:ring-2"
        />
      </label>
      <label className="block">
        <span className="mb-1.5 block text-sm font-medium text-ink">Message</span>
        <textarea
          name="message"
          required
          rows={5}
          className="w-full resize-y rounded-md border border-slate-line px-4 py-3 outline-none ring-copper focus:ring-2"
        />
      </label>
      <Button type="submit" className="w-full sm:w-auto">
        Send Message
      </Button>
    </form>
  );
}
