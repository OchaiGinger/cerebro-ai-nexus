import { cn } from "@/lib/utils";

interface LoadingSpinnerProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const LoadingSpinner = ({ className, size = "md" }: LoadingSpinnerProps) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8", 
    lg: "w-12 h-12"
  };

  return (
    <div className={cn("relative", className)}>
      <div className={cn(
        "animate-spin rounded-full border-2 border-transparent bg-gradient-to-r from-primary to-accent bg-clip-border",
        sizeClasses[size]
      )}>
        <div className={cn(
          "rounded-full bg-background",
          size === "sm" ? "m-0.5 w-3 h-3" : size === "md" ? "m-1 w-6 h-6" : "m-1.5 w-9 h-9"
        )} />
      </div>
      
      {/* Neural pulse effect */}
      <div className={cn(
        "absolute inset-0 rounded-full bg-primary/20 animate-ping",
        sizeClasses[size]
      )} />
    </div>
  );
};

export default LoadingSpinner;