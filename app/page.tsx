"use client";
import { usePathname, useRouter } from "next/navigation";
import Home from "./[lang]/home/page";
import { useEffect } from "react";

export default function App() {
  const pathname = usePathname()

  const isIndex = pathname === "/";

  const router = useRouter();
  useEffect(() => {
    if(isIndex) {

      router.push("/en/home");
    }
  }, [router, isIndex]);

  return (
    <div className="mt-6 text-black outline">
      <Home />
    </div>
  );
}
