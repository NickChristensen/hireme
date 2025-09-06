"use client";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-4xl font-bold">Hello World</h1>
      <Button onClick={() => console.log("Button clicked!")}>
        Click me
      </Button>
    </div>
  );
}
