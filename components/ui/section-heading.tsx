import { ReactNode } from "react";

type SectionHeadingProps = {
  kicker: string;
  title: string;
  children?: ReactNode;
};

export function SectionHeading({ kicker, title, children }: SectionHeadingProps) {
  return (
    <div className="mb-12 max-w-4xl">
      <p className="section-kicker">{kicker}</p>
      <h2 className="mt-4 text-4xl font-bold tracking-[-0.035em] text-white sm:text-5xl">
        {title}
      </h2>
      {children ? <p className="mt-5 max-w-3xl text-base leading-7 text-muted sm:text-lg">{children}</p> : null}
    </div>
  );
}
