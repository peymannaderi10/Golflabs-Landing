"use client";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import React, { useLayoutEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

function TimelineStep({
  item,
  index,
  total,
  scrollYProgress,
}: {
  item: TimelineEntry;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
}) {
  const start = index / total;
  const end = Math.min(1, start + 0.2);

  const labelOpacity = useTransform(scrollYProgress, [start, end], [0.3, 1]);
  const dotFill = useTransform(scrollYProgress, [start, end], [0, 1]);

  return (
    <div className="flex justify-start pt-10 md:pt-40 md:gap-10">
      {/* Left label column — sticky on desktop only */}
      <div className="md:sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
        {/* Dot */}
        <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-background flex items-center justify-center">
          <div className="relative h-4 w-4 rounded-full">
            <div className="absolute inset-0 rounded-full bg-muted border border-border" />
            <motion.div
              style={{ opacity: dotFill }}
              className="absolute inset-0 rounded-full bg-primary"
            />
          </div>
        </div>

        {/* Step title — desktop only, animated */}
        <motion.h3
          style={{ opacity: labelOpacity }}
          className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-foreground"
        >
          {item.title}
        </motion.h3>
      </div>

      {/* Content */}
      <div className="relative pl-20 pr-4 md:pl-4 w-full">
        {/* Step title — mobile only, always full opacity */}
        <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-foreground">
          {item.title}
        </h3>

        {item.content}
      </div>
    </div>
  );
}

export const Timeline = ({
  data,
  title,
  subtitle,
}: {
  data: TimelineEntry[];
  title?: string;
  subtitle?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useLayoutEffect(() => {
    if (ref.current) setHeight(ref.current.offsetHeight);

    const mq = window.matchMedia("(min-width: 768px)");
    setIsMobile(!mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(!e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Two independent scroll trackers — one per breakpoint
  const { scrollYProgress: desktopProgress } = useScroll({
    target: containerRef,
    offset: ["start 20%", "end 50%"],
  });
  const { scrollYProgress: mobileProgress } = useScroll({
    target: containerRef,
    offset: ["start 40%", "end 50%"],
  });

  const scrollYProgress = isMobile ? mobileProgress : desktopProgress;

  // Subtract pb-20 (80px) so the line stops at the content boundary
  const trackHeight = Math.max(0, height - 80);

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, trackHeight]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full font-sans" ref={containerRef}>
      {(title || subtitle) && (
        <div className="pb-10">
          {title && (
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-semibold text-foreground"
            >
              {title}
            </motion.h2>
          )}
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="mt-2 text-muted-foreground text-sm md:text-base"
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      )}

      <div ref={ref} className="relative pb-20">
        {data.map((item, index) => (
          <TimelineStep
            key={index}
            item={item}
            index={index}
            total={data.length}
            scrollYProgress={scrollYProgress}
          />
        ))}

        {/* Scroll-driven line track */}
        <div
          style={{ height: trackHeight + "px" }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-border to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{ height: heightTransform, opacity: opacityTransform }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-primary via-primary/60 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
