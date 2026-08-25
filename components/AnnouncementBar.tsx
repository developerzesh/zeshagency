"use client";

type AnnouncementBarProps = {
  className?: string;
};

export default function AnnouncementBar({ className = "" }: AnnouncementBarProps) {
  return (
    <div
      className={[
        "relative isolate w-full overflow-hidden",
        "border-b border-border/40",
        "bg-ink text-paper",
        className,
      ].join(" ")}
    >
      {/* Decorative wave field - left */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 w-[27%] opacity-60 text-signal/25"
      >
        <svg viewBox="0 0 420 80" preserveAspectRatio="none" className="h-full w-full" fill="none">
          {[0, 12, 24, 36, 48, 60, 72, 84].map((offset) => (
            <path
              key={offset}
              d={`M-20 ${68 - offset * 0.12} C 70 ${35 - offset * 0.15}, 155 ${95 - offset * 0.18}, 250 ${58 - offset * 0.14} S 360 ${28 - offset * 0.1}, 440 ${48 - offset * 0.08}`}
              stroke="currentColor"
              strokeWidth="1"
              vectorEffect="non-scaling-stroke"
            />
          ))}
        </svg>
      </div>

      {/* Decorative wave field - right */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 w-[24%] opacity-40 text-signal/15"
      >
        <svg viewBox="0 0 360 80" preserveAspectRatio="none" className="h-full w-full" fill="none">
          {[0, 12, 24, 36, 48, 60, 72, 84].map((offset) => (
            <path
              key={offset}
              d={`M-20 ${52 + offset * 0.08} C 70 ${25 + offset * 0.1}, 150 ${72 + offset * 0.12}, 220 ${38 + offset * 0.14} S 300 ${12 + offset * 0.1}, 380 ${2 + offset * 0.07}`}
              stroke="currentColor"
              strokeWidth="1"
              vectorEffect="non-scaling-stroke"
            />
          ))}
        </svg>
      </div>

      {/* Content */}
      <div className="relative flex items-center justify-center px-4 py-1.5 sm:px-10 sm:py-2.5">
        {/* Recognition mark */}
        <div className="absolute left-3 flex items-center gap-3 sm:left-10 sm:gap-5">
          <div className="relative h-5 w-5 sm:h-8 sm:w-8">
            <span
              className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-signal sm:h-4 sm:w-4"
              style={{ clipPath: "polygon(50% 0%, 60% 39%, 100% 50%, 60% 61%, 50% 100%, 40% 61%, 0% 50%, 40% 39%)" }}
            />
            <span
              className="absolute right-0 top-0 h-1.5 w-1.5 rotate-45 bg-signal sm:h-2 sm:w-2"
              style={{ clipPath: "polygon(50% 0%, 60% 39%, 100% 50%, 60% 61%, 50% 100%, 40% 61%, 0% 50%, 40% 39%)" }}
            />
            <span
              className="absolute bottom-0 left-0.5 h-1.5 w-1.5 rotate-45 bg-signal sm:h-2 sm:w-2"
              style={{ clipPath: "polygon(50% 0%, 60% 39%, 100% 50%, 60% 61%, 50% 100%, 40% 61%, 0% 50%, 40% 39%)" }}
            />
          </div>
          <div className="hidden h-4 w-px bg-signal/60 sm:block" />
        </div>

        {/* Main announcement */}
        <span className="mx-auto text-center font-lato text-[12px] font-normal tracking-[0.12em] sm:text-[14px] leading-none pl-8 pr-1 sm:pl-20 sm:pr-2 uppercase">
          Proud to be recognized in the{" "}
          <span className="font-medium text-signal">30 Under 30</span>{" "}
          for Innovative Marketing
        </span>
      </div>
    </div>
  );
}
