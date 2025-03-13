import { cn } from "@/lib/utils";
//import RoofMaster from "@/static/RoofMasters-2.svg";
import Master from "@/static/logoMain.svg";

interface LogoProps {
  className?: string;
}

export default function Logo({ className }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>

      <img 
        src={Master}
        alt="Roof Masters" 
        className="w-12 h-12"
      />
      <span className="text-xl font-bold text-primary">
        Roof Masters
      </span>
    
    </div>
  );
}
