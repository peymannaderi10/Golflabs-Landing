import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface FeatureWithImageProps {
  badge?: string;
  title: string;
  description: string;
  image?: React.ReactNode;
  className?: string;
  reverse?: boolean;
}

import React from "react";

function FeatureWithImage({
  badge,
  title,
  description,
  image,
  className,
  reverse = false,
}: FeatureWithImageProps) {
  return (
    <div className={cn("w-full", className)}>
      <div
        className={cn(
          "flex flex-col gap-10 lg:items-center",
          reverse ? "lg:flex-row-reverse" : "lg:flex-row"
        )}
      >
        <div className="w-full aspect-[1.55/1] h-full flex-[1.5] overflow-visible relative z-10 drop-shadow-2xl">
          {image ?? <div className="w-full h-full bg-muted" />}
        </div>
        <div className="flex gap-4 flex-col flex-1">
          {badge && (
            <div>
              <Badge>{badge}</Badge>
            </div>
          )}
          <div className="flex gap-2 flex-col">
            <h2 className="text-2xl md:text-3xl lg:text-4xl tracking-tight font-semibold text-foreground text-left max-w-sm">
              {title}
            </h2>
            <p className="text-base max-w-sm leading-relaxed text-muted-foreground text-left">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export { FeatureWithImage };
