interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg" | "xl";
  color?: "primary" | "white" | "gray";
  text?: string;
}

export default function LoadingSpinner({ size = "md", color = "primary", text }: LoadingSpinnerProps) {
  const sizes = {
    sm: "w-4 h-4 border-2",
    md: "w-8 h-8 border-3",
    lg: "w-12 h-12 border-4",
    xl: "w-16 h-16 border-4",
  };

  const colors = {
    primary: "border-primary-500 border-t-transparent",
    white: "border-white border-t-transparent",
    gray: "border-gray-500 border-t-transparent",
  };

  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <div
        className={`${sizes[size]} ${colors[color]} rounded-full animate-spin`}
        role="status"
        aria-label="Loading"
      />
      {text && (
        <p className="text-sm font-medium text-gray-600 animate-pulse">{text}</p>
      )}
    </div>
  );
}
