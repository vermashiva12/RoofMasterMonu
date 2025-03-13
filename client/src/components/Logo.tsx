import { cn } from "@/lib/utils";


interface LogoProps {
  className?: string;
}

export default function Logo({ className }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>

      <img 
        src="../static/RoofMasters-2.svg" 
        alt="Roof Masters Logo" 
        className="w-10 h-10"
      />
      <span className="text-2xl font-bold text-primary">
        Roof Masters
      </span>
    
    </div>
  );
}
