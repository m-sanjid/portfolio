import { motion } from "motion/react";
import { Component } from "@/hooks/use-components";
import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface ComponentCardProps {
  component: Component;
  variants?: any;
}

export default function ComponentCard({
  component,
  variants,
}: ComponentCardProps) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyCode = async () => {
    try {
      const code = component.code;
      await navigator.clipboard.writeText(code.toString());
      setIsCopied(true);
      toast.success("Code copied to clipboard!");
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      toast.error("Failed to copy code");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden"
    >
      <div className="relative h-full rounded-2xl border border-zinc-200/40 bg-primary/5 p-6 backdrop-blur-sm dark:border-zinc-800/40">
        <div className="flex min-h-[200px] items-center justify-center">
          <component.component />
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold">{component.name}</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              {component.description}
            </p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleCopyCode}
            className="h-8 w-8"
          >
            {isCopied ? (
              <Check className="h-4 w-4" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
