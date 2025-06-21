"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Copy, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const CopyButton = ({ text }: { text: string }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      toast.success("Code copied to clipboard!");
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      toast.error("Failed to copy code");
    }
  };

  return (
    <motion.button
      onClick={handleCopyCode}
      whileTap={{ scale: 0.95 }}
      layout
      className="absolute right-1 top-1 z-10 rounded-md border bg-background px-3 py-1.5 shadow-md transition-colors hover:bg-muted/50"
      aria-label={
        isCopied ? "Code copied to clipboard" : "Copy code to clipboard"
      }
      aria-pressed={isCopied}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isCopied ? (
          <motion.div
            key="copied"
            layoutId="copy-button"
            initial={{ opacity: 0, y: -5, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 5, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="flex items-center gap-1.5 text-green-500"
          >
            <Check className="h-4 w-4" aria-hidden="true" />
            <span className="text-sm">Copied</span>
          </motion.div>
        ) : (
          <motion.div
            key="copy"
            layoutId="copy-button"
            initial={{ opacity: 0, y: -5, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 5, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="flex items-center gap-1.5"
          >
            <Copy className="h-4 w-4" aria-hidden="true" />
            <span className="text-sm">Copy</span>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
};
