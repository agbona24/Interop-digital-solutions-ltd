"use client";

interface ProgressBarProps {
  progress: number; // 0-100
  height?: "sm" | "md" | "lg";
  color?: "primary" | "success" | "warning" | "danger";
  showLabel?: boolean;
  animated?: boolean;
}

export default function ProgressBar({
  progress,
  height = "md",
  color = "primary",
  showLabel = false,
  animated = true,
}: ProgressBarProps) {
  const clampedProgress = Math.min(100, Math.max(0, progress));

  const heights = {
    sm: "h-1",
    md: "h-2",
    lg: "h-4",
  };

  const colors = {
    primary: "bg-primary-500",
    success: "bg-green-500",
    warning: "bg-yellow-500",
    danger: "bg-red-500",
  };

  return (
    <div className="w-full">
      {showLabel && (
        <div className="flex justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">Progress</span>
          <span className="text-sm font-medium text-gray-700">{clampedProgress}%</span>
        </div>
      )}
      <div className={`w-full bg-gray-200 rounded-full overflow-hidden ${heights[height]}`}>
        <div
          className={`${colors[color]} ${heights[height]} rounded-full transition-all duration-300 ${
            animated ? "animate-pulse" : ""
          }`}
          style={{ width: `${clampedProgress}%` }}
          role="progressbar"
          aria-valuenow={clampedProgress}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
    </div>
  );
}
