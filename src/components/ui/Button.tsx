import Link from "next/link";
import { type ButtonHTMLAttributes, type ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "navy";
type Size = "sm" | "md" | "lg";

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
};

type ButtonAsButton = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps> & {
    href?: never;
  };

type ButtonAsLink = CommonProps & {
  href: string;
  onClick?: () => void;
  disabled?: boolean;
};

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-copper text-white hover:bg-copper-dark hover:-translate-y-0.5",
  secondary:
    "border-2 border-ink bg-transparent text-ink hover:bg-ink hover:text-white hover:-translate-y-0.5",
  ghost:
    "border-2 border-white/80 bg-transparent text-white hover:bg-white hover:text-ink hover:-translate-y-0.5",
  navy: "bg-ink text-white hover:bg-ink-soft hover:-translate-y-0.5",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm sm:text-base",
  lg: "px-6 py-3.5 text-base sm:text-lg",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-md font-display font-semibold tracking-tight transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-copper disabled:pointer-events-none disabled:opacity-50";

function cx(
  variant: Variant,
  size: Size,
  className: string,
  disabled?: boolean
) {
  return `${base} ${variantClasses[variant]} ${sizeClasses[size]} ${className}${
    disabled ? " pointer-events-none opacity-50" : ""
  }`;
}

export function Button(props: ButtonProps) {
  const variant = props.variant ?? "primary";
  const size = props.size ?? "md";
  const className = props.className ?? "";

  if ("href" in props && props.href) {
    const classes = cx(variant, size, className, props.disabled);
    const external =
      props.href.startsWith("tel:") ||
      props.href.startsWith("mailto:") ||
      props.href.startsWith("http");

    if (external) {
      return (
        <a href={props.href} className={classes} onClick={props.onClick}>
          {props.children}
        </a>
      );
    }

    return (
      <Link href={props.href} className={classes} onClick={props.onClick}>
        {props.children}
      </Link>
    );
  }

  const buttonProps = props as ButtonAsButton;
  const classes = cx(variant, size, className, buttonProps.disabled);

  return (
    <button
      type={buttonProps.type ?? "button"}
      className={classes}
      disabled={buttonProps.disabled}
      onClick={buttonProps.onClick}
      name={buttonProps.name}
      value={buttonProps.value}
      form={buttonProps.form}
      aria-label={buttonProps["aria-label"]}
    >
      {props.children}
    </button>
  );
}
