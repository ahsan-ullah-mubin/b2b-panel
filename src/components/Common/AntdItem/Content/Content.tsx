
import React from "react";


export function AppContent({ children }: { children: React.ReactNode }) {
  return (

      <div
        style={{
          padding: 24,
          minHeight: 360,
        }}
      >
        {children}
      </div>
 
  );
}
