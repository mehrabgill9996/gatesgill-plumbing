import { Button } from "@/components/ui/Button";

type CTABannerProps = {
  title?: string;
  description?: string;
  variant?: "copper" | "navy" | "pale";
  className?: string;
};

export function CTABanner({
  title = "Ready to get started? Get your free install quote today.",
  description = "No obligation. Clear pricing. Most quotes answered within one business hour.",
  variant = "navy",
  className = "",
}: CTABannerProps) {
  const styles = {
    copper: "bg-copper text-white",
    navy: "bg-ink text-white",
    pale: "bg-slate-pale text-ink",
  }[variant];

  const descColor =
    variant === "pale" ? "text-slate-text" : "text-white/80";
  const buttonVariant =
    variant === "pale" ? "primary" : variant === "copper" ? "navy" : "primary";

  return (
    <section className={`relative overflow-hidden ${styles} ${className}`}>
      {variant !== "pale" && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.35), transparent 45%), radial-gradient(circle at 90% 20%, rgba(201,122,61,0.5), transparent 40%)",
          }}
        />
      )}
      <div className="container-site relative flex flex-col items-start justify-between gap-6 py-14 sm:py-16 md:flex-row md:items-center">
        <div className="max-w-xl">
          <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
            {title}
          </h2>
          <p className={`mt-3 text-base sm:text-lg ${descColor}`}>
            {description}
          </p>
        </div>
        <Button href="/quote" variant={buttonVariant} size="lg">
          Get Install Quote
        </Button>
      </div>
    </section>
  );
}
