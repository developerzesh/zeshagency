"use client";

import { useTheme } from "./ThemeContext";

type AnnouncementBarProps = {
  className?: string;
};

export default function AnnouncementBar({ className = "" }: AnnouncementBarProps) {
  const { isDark } = useTheme();

  return (
    <div
      className={[
        "relative isolate w-full overflow-hidden",
        "border",
        "rounded-none sm:rounded-2xl",
        "transition-colors duration-300",
        isDark
          ? "border-white/10 bg-[#0a0c0d] text-white"
          : "border-black/[0.08] bg-[#faf9f7] text-[#111]",
        className,
      ].join(" ")}
    >
      {/* Left Converging Wave Mesh */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <svg
          className="absolute bottom-0 left-0 h-full w-[60%]"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          fill="none"
        >
          {Array.from({ length: 24 }).map((_, i) => {
            const startY = 119.5 - i * 0.15;
            const peakY = 116.5 - Math.pow(i, 1.1) * 1.1;
            const endX = 450;
            const endY = 120;
            const opacity = isDark ? 0.08 + (i / 24) * 0.45 : 0.06 + (i / 24) * 0.35;
            return (
              <path
                key={`left-mesh-${i}`}
                d={`M -40 ${startY} 
                   C 30 ${startY}, 90 ${peakY}, 170 ${peakY} 
                   C 270 ${peakY}, 360 ${endY}, ${endX} ${endY}`}
                stroke={isDark ? "#f2a92b" : "#d98218"}
                strokeWidth="0.45"
                strokeOpacity={opacity}
              />
            );
          })}
        </svg>
      </div>

      {/* Right-side flowing lines — bottom to top */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <svg
          className="absolute bottom-0 right-0 h-full w-[45%]"
          viewBox="0 0 600 120"
          preserveAspectRatio="none"
          fill="none"
        >
          {Array.from({ length: 18 }).map((_, i) => {
            const startX = 600 + i * 10;
            const startY = 0;
            const endX = 540 - i * 6;
            const endY = 120;
            const midX = (startX + endX) / 2 + i * 4;
            const midY = 55;
            const opacity = isDark ? 0.06 + (i / 12) * 0.3 : 0.05 + (i / 12) * 0.25;
            return (
              <path
                key={`right-line-${i}`}
                d={`M ${startX} ${startY} Q ${midX} ${midY}, ${endX} ${endY}`}
                stroke={isDark ? "#f2a92b" : "#d98218"}
                strokeWidth="0.5"
                strokeOpacity={opacity}
              />
            );
          })}
        </svg>
      </div>

      {/* Main Content Layer */}
      <div className="relative z-10 flex min-h-[40px] items-center justify-between px-4 py-2 sm:min-h-[55px] sm:px-16 sm:py-0">
        <div className="w-full flex gap-2 sm:gap-15">
          {/* Sparkles */}
          <div className="relative hidden min-[375px]:block h-8 w-8 shrink-0 sm:h-12 sm:w-12">
            {/* Medium Sparkle - Left Middle */}
            <span
              className={[
                "absolute left-[10%] top-[30%] h-3 w-3 sm:h-3.5 sm:w-3.5",
                isDark ? "bg-[#f2a92b]" : "bg-[#e2931d]",
              ].join(" ")}
              style={{
                clipPath:
                  "polygon(50% 0%, 62% 38%, 100% 50%, 62% 62%, 50% 100%, 38% 62%, 0% 50%, 38% 38%)",
              }}
            />

            {/* Small Sparkle - Top Right */}
            <span
              className={[
                "absolute left-[58%] top-[10%] h-2 w-2 sm:h-2.5 sm:w-2.5",
                isDark ? "bg-[#f2a92b]" : "bg-[#e2931d]",
              ].join(" ")}
              style={{
                clipPath:
                  "polygon(50% 0%, 62% 38%, 100% 50%, 62% 62%, 50% 100%, 38% 62%, 0% 50%, 38% 38%)",
              }}
            />

            {/* Large Sparkle - Bottom Right */}
            <span
              className={[
                "absolute left-[45%] top-[50%] h-3.5 w-3.5 sm:h-4.5 sm:w-4.5",
                isDark ? "bg-[#f2a92b]" : "bg-[#e2931d]",
              ].join(" ")}
              style={{
                clipPath:
                  "polygon(50% 0%, 62% 38%, 100% 50%, 62% 62%, 50% 100%, 38% 62%, 0% 50%, 38% 38%)",
              }}
            />
          </div>

          <div className="flex items-center">
            {/* Vertical Divider Line */}
            <div
              className={[
                "hidden sm:block ml-7 h-8 w-px shrink-0",
                isDark ? "bg-[#f2a92b]/60" : "bg-black/15",
              ].join(" ")}
            />

            {/* Announcement Text */}
            <p
              className={[
                "pl-1 sm:pl-7",
                "font-sans text-sm font-normal tracking-[0.012em]",
                "sm:text-[17px]",
                "leading-relaxed",
              ].join(" ")}
            >
              Proud to be recognized in the{" "}
              <span
                className={[
                  "font-semibold",
                  isDark ? "text-[#f2a92b]" : "text-[#d98218]",
                ].join(" ")}
              >
                30 Under 30
              </span>{" "}
              for Innovative Marketing
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}