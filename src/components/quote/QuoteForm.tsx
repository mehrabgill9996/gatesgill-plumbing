"use client";

import { FormEvent, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  CheckCircle2,
  Clock3,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/constants";

const SERVICE_TYPES = [
  { id: "new", label: "New Install", hint: "First-time equipment or fixture" },
  { id: "replacement", label: "Replacement", hint: "Swap an existing unit" },
  { id: "repair", label: "Repair", hint: "Fix what's broken" },
  { id: "emergency", label: "Emergency", hint: "Need help ASAP" },
] as const;

const PROPERTY_TYPES = ["House", "Townhome", "Condo / Apartment", "Commercial"] as const;

const CONTACT_TIMES = ["Morning", "Afternoon", "Evening", "Anytime"] as const;

type FormState = {
  serviceType: string;
  address: string;
  propertyType: string;
  name: string;
  phone: string;
  email: string;
  preferredTime: string;
};

const initial: FormState = {
  serviceType: "",
  address: "",
  propertyType: "",
  name: "",
  phone: "",
  email: "",
  preferredTime: "Anytime",
};

export function QuoteForm() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormState>(initial);
  const [direction, setDirection] = useState(1);

  const progress = step === 4 ? 100 : ((step - 1) / 3) * 100;

  const goNext = () => {
    setDirection(1);
    setStep((s) => Math.min(s + 1, 4));
  };

  const goBack = () => {
    setDirection(-1);
    setStep((s) => Math.max(s - 1, 1));
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Quote request:", form);
    setDirection(1);
    setStep(4);
  };

  return (
    <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
      <aside className="lg:col-span-4">
        <div className="sticky top-28 space-y-4 rounded-2xl bg-ink p-6 text-white shadow-lift sm:p-7">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-copper-light">
            Why quote with us
          </p>
          <ul className="space-y-4">
            {[
              {
                icon: ShieldCheck,
                title: "Free, no-obligation quotes",
                text: "Clear pricing before any work starts.",
              },
              {
                icon: Clock3,
                title: "Response within 1 business hour",
                text: "Most quote requests get a same-day call-back.",
              },
              {
                icon: Phone,
                title: "Prefer to talk?",
                text: SITE.phone,
              },
            ].map((item) => (
              <li key={item.title} className="flex gap-3">
                <item.icon className="mt-0.5 h-5 w-5 shrink-0 text-copper-light" />
                <div>
                  <p className="font-display font-semibold">{item.title}</p>
                  {item.title.includes("Prefer") ? (
                    <a
                      href={SITE.phoneHref}
                      className="text-sm text-white/75 underline-offset-2 hover:underline"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <p className="text-sm text-white/70">{item.text}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      <div className="lg:col-span-8">
        <div className="mb-6">
          <div className="mb-2 flex items-center justify-between text-sm">
            <span className="font-display font-semibold text-ink">
              {step < 4 ? `Step ${step} of 3` : "Complete"}
            </span>
            <span className="text-slate-text">{Math.round(progress)}%</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-slate-line">
            <motion.div
              className="h-full rounded-full bg-copper"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.35 }}
            />
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-line bg-white p-6 shadow-soft sm:p-8">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={step}
              custom={direction}
              initial={{ opacity: 0, x: direction * 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -40 }}
              transition={{ duration: 0.28 }}
            >
              {step === 1 && (
                <div>
                  <h2 className="font-display text-2xl font-bold text-ink">
                    What do you need?
                  </h2>
                  <p className="mt-2 text-slate-text">
                    Select the option that best matches your job.
                  </p>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {SERVICE_TYPES.map((type) => {
                      const selected = form.serviceType === type.id;
                      return (
                        <button
                          key={type.id}
                          type="button"
                          onClick={() =>
                            setForm((f) => ({ ...f, serviceType: type.id }))
                          }
                          className={`rounded-xl border p-4 text-left transition ${
                            selected
                              ? "border-copper bg-copper/5 shadow-soft"
                              : "border-slate-line hover:border-copper/40"
                          }`}
                        >
                          <p className="font-display font-semibold text-ink">
                            {type.label}
                          </p>
                          <p className="mt-1 text-sm text-slate-text">
                            {type.hint}
                          </p>
                        </button>
                      );
                    })}
                  </div>
                  <div className="mt-8 flex justify-end">
                    <Button
                      type="button"
                      disabled={!form.serviceType}
                      onClick={goNext}
                    >
                      Continue
                    </Button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div>
                  <h2 className="font-display text-2xl font-bold text-ink">
                    Property details
                  </h2>
                  <p className="mt-2 text-slate-text">
                    Helps us prepare the right crew and materials.
                  </p>
                  <div className="mt-6 space-y-4">
                    <label className="block">
                      <span className="mb-1.5 block text-sm font-medium text-ink">
                        Address
                      </span>
                      <input
                        required
                        value={form.address}
                        onChange={(e) =>
                          setForm((f) => ({ ...f, address: e.target.value }))
                        }
                        placeholder="Street, city, postal code"
                        className="w-full rounded-md border border-slate-line px-4 py-3 outline-none ring-copper focus:ring-2"
                      />
                    </label>
                    <fieldset>
                      <legend className="mb-2 text-sm font-medium text-ink">
                        Property type
                      </legend>
                      <div className="grid gap-2 sm:grid-cols-2">
                        {PROPERTY_TYPES.map((type) => (
                          <button
                            key={type}
                            type="button"
                            onClick={() =>
                              setForm((f) => ({ ...f, propertyType: type }))
                            }
                            className={`rounded-lg border px-4 py-3 text-left text-sm font-medium transition ${
                              form.propertyType === type
                                ? "border-copper bg-copper/5 text-ink"
                                : "border-slate-line text-slate-text hover:border-copper/40"
                            }`}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </fieldset>
                  </div>
                  <div className="mt-8 flex justify-between">
                    <Button type="button" variant="secondary" onClick={goBack}>
                      Back
                    </Button>
                    <Button
                      type="button"
                      disabled={!form.address || !form.propertyType}
                      onClick={goNext}
                    >
                      Continue
                    </Button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <form onSubmit={onSubmit}>
                  <h2 className="font-display text-2xl font-bold text-ink">
                    How do we reach you?
                  </h2>
                  <p className="mt-2 text-slate-text">
                    We&apos;ll confirm details and send your free quote.
                  </p>
                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <label className="block sm:col-span-2">
                      <span className="mb-1.5 block text-sm font-medium text-ink">
                        Full name
                      </span>
                      <input
                        required
                        value={form.name}
                        onChange={(e) =>
                          setForm((f) => ({ ...f, name: e.target.value }))
                        }
                        className="w-full rounded-md border border-slate-line px-4 py-3 outline-none ring-copper focus:ring-2"
                      />
                    </label>
                    <label className="block">
                      <span className="mb-1.5 block text-sm font-medium text-ink">
                        Phone
                      </span>
                      <input
                        required
                        type="tel"
                        value={form.phone}
                        onChange={(e) =>
                          setForm((f) => ({ ...f, phone: e.target.value }))
                        }
                        className="w-full rounded-md border border-slate-line px-4 py-3 outline-none ring-copper focus:ring-2"
                      />
                    </label>
                    <label className="block">
                      <span className="mb-1.5 block text-sm font-medium text-ink">
                        Email
                      </span>
                      <input
                        required
                        type="email"
                        value={form.email}
                        onChange={(e) =>
                          setForm((f) => ({ ...f, email: e.target.value }))
                        }
                        className="w-full rounded-md border border-slate-line px-4 py-3 outline-none ring-copper focus:ring-2"
                      />
                    </label>
                    <fieldset className="sm:col-span-2">
                      <legend className="mb-2 text-sm font-medium text-ink">
                        Preferred contact time
                      </legend>
                      <div className="flex flex-wrap gap-2">
                        {CONTACT_TIMES.map((time) => (
                          <button
                            key={time}
                            type="button"
                            onClick={() =>
                              setForm((f) => ({ ...f, preferredTime: time }))
                            }
                            className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                              form.preferredTime === time
                                ? "border-copper bg-copper text-white"
                                : "border-slate-line text-slate-text hover:border-copper/40"
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </fieldset>
                  </div>
                  <div className="mt-8 flex justify-between">
                    <Button type="button" variant="secondary" onClick={goBack}>
                      Back
                    </Button>
                    <Button type="submit">Submit Quote Request</Button>
                  </div>
                </form>
              )}

              {step === 4 && (
                <div className="py-6 text-center">
                  <CheckCircle2 className="mx-auto h-14 w-14 text-copper" />
                  <h2 className="mt-4 font-display text-3xl font-bold text-ink">
                    Quote request received
                  </h2>
                  <p className="mx-auto mt-3 max-w-md text-slate-text">
                    Thanks, {form.name || "there"}. A Gatesgill tech will reach
                    out within one business hour during regular hours — sooner
                    for emergencies.
                  </p>
                  <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                    <Button href="/">Back to Home</Button>
                    <Button href={SITE.phoneHref} variant="secondary">
                      Call {SITE.phone}
                    </Button>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
