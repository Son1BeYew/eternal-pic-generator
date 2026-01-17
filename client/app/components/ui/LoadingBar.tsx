"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingBar() {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const timeout = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed top-0 left-0 right-0 z-[9999] h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-blue-500"
          initial={{ scaleX: 0, transformOrigin: "left" }}
          animate={{ scaleX: 1, transformOrigin: "left" }}
          exit={{ scaleX: 1, transformOrigin: "right", opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      )}
    </AnimatePresence>
  );
}
