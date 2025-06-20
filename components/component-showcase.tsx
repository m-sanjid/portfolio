"use client";

import { useState } from "react";

import { CopyButton } from "./copy-button";
import { CodeBlockWrapper } from "./code-wrapper";
import { motion } from "motion/react";

export function ComponentShowcase({
  preview,
  code,
}: {
  preview: React.ReactNode;
  code: string;
}) {
  const [tab, setTab] = useState<"preview" | "code">("preview");

  return (
    <div className="min-h-[400px] overflow-y-auto">
      <div className="relative flex flex-col items-start pb-4">
        <div className="flex items-center justify-center">
          {/* Tab Selector Background */}
          <div className="relative flex items-center rounded-xl bg-neutral-100/80 p-1 shadow-inner backdrop-blur-sm dark:bg-neutral-800/80">
            {/* Animated Tab Indicator */}
            <div
              className={`absolute bottom-1 top-1 w-[calc(50%-4px)] rounded-[8px] bg-white shadow-sm transition-all duration-300 ease-out dark:bg-neutral-700 ${
                tab === "preview" ? "left-1" : "left-[calc(50%+2px)]"
              }`}
            />

            {/* Tab Buttons */}
            <button
              className={`relative z-10 rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-300 ease-out ${
                tab === "preview"
                  ? "scale-95 text-neutral-900 dark:text-neutral-100"
                  : "text-neutral-600 hover:scale-105 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-200"
              }`}
              onClick={() => setTab("preview")}
            >
              Preview
            </button>

            <button
              className={`relative z-10 rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-300 ease-out ${
                tab === "code"
                  ? "scale-95 text-neutral-900 dark:text-neutral-100"
                  : "text-neutral-600 hover:scale-105 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-200"
              }`}
              onClick={() => setTab("code")}
            >
              Code
            </button>
          </div>
        </div>
      </div>
      <motion.div
        className="h-full w-full overflow-y-auto rounded-xl border bg-muted/50 p-4"
        layout
      >
        {tab === "preview" && (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            layoutId="preview"
            className="p-4"
          >
            {preview}
          </motion.div>
        )}

        {tab === "code" && (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            layoutId="code"
            className="max-h-[500px] overflow-y-auto rounded-xl border"
          >
            <CopyButton text={code} />
            <CodeBlockWrapper>
              <pre className="p-4">{code}</pre>
            </CodeBlockWrapper>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
