import { ReactNode } from "react";

interface PhoneFrameProps {
  children: ReactNode;
}

export const PhoneFrame = ({ children }: PhoneFrameProps) => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 p-8">
      <div className="phone-frame">
        <div className="phone-screen">
          {/* Status bar */}
          <div className="absolute top-0 left-0 right-0 h-12 bg-background flex items-center justify-between px-6 z-50">
            <span className="text-sm font-medium">9:41</span>
            <div className="flex items-center gap-1">
              <div className="w-4 h-2 bg-foreground rounded-sm opacity-60"></div>
              <div className="w-6 h-3 border border-foreground rounded-sm opacity-60">
                <div className="w-4 h-2 bg-foreground rounded-[1px] m-[1px]"></div>
              </div>
            </div>
          </div>
          
          {/* Main content */}
          <div className="pt-12 h-full">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};