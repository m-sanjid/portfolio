"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Send, Check, Loader2 } from "lucide-react";

export function MessageForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setIsSuccess(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      toast.success("Message sent successfully!");
      setIsSuccess(true);
      setName("");
      setEmail("");
      setMessage("");
      setTimeout(() => setIsSuccess(false), 2000);
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="relative">
      <div
        className="absolute -inset-2 rounded-lg bg-gradient-to-br from-zinc-500/10 to-zinc-900/10 blur-xl dark:from-zinc-500/10 dark:to-zinc-900/10"
        aria-hidden="true"
      />
      <div className="relative rounded-3xl border border-zinc-200 bg-zinc-50 p-6 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/50">
        <form
          onSubmit={onSubmit}
          className="space-y-6"
          aria-label="Contact form"
        >
          <fieldset className="space-y-6">
            <legend className="sr-only">Contact Information</legend>

            {/* Name Input */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="space-y-2"
            >
              <label htmlFor="name" className="block text-sm font-medium">
                Name{" "}
                <span className="text-red-500" aria-label="required">
                  *
                </span>
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 rounded-xl"
                placeholder="Your name"
                aria-describedby="name-error"
                aria-invalid={name === "" && name !== undefined}
              />
            </motion.div>

            {/* Email Input */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-2"
            >
              <label htmlFor="email" className="block text-sm font-medium">
                Email{" "}
                <span className="text-red-500" aria-label="required">
                  *
                </span>
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 rounded-xl"
                placeholder="your.email@example.com"
                aria-describedby="email-error"
                aria-invalid={email === "" && email !== undefined}
              />
            </motion.div>

            {/* Message Textarea */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-2"
            >
              <label htmlFor="message" className="block text-sm font-medium">
                Message{" "}
                <span className="text-red-500" aria-label="required">
                  *
                </span>
              </label>
              <Textarea
                id="message"
                name="message"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="mt-1 rounded-xl"
                placeholder="Your message..."
                aria-describedby="message-error"
                aria-invalid={message === "" && message !== undefined}
              />
            </motion.div>
          </fieldset>

          {/* Submit Button */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Button
              type="submit"
              disabled={isLoading || isSuccess}
              className="group h-11 w-full rounded-xl border border-zinc-700 bg-zinc-800 text-zinc-100 transition-colors hover:border-zinc-600 hover:bg-zinc-700"
              aria-describedby="submit-status"
            >
              <AnimatePresence mode="wait">
                {isLoading ? (
                  <motion.div
                    key="loading"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="flex items-center justify-center gap-1"
                  >
                    <span>Sending</span>
                    <Loader2
                      className="h-5 w-5 animate-spin"
                      aria-hidden="true"
                    />
                  </motion.div>
                ) : isSuccess ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="flex items-center justify-center gap-1"
                  >
                    <span>Success</span>
                    <Check className="h-5 w-5" aria-hidden="true" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="idle"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="flex items-center gap-2"
                  >
                    <Send
                      className="h-5 w-5 transition-all duration-200 ease-in-out group-hover:-translate-x-2"
                      aria-hidden="true"
                    />
                    <span>Send Message</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
            <div id="submit-status" className="sr-only" aria-live="polite">
              {isLoading && "Sending message..."}
              {isSuccess && "Message sent successfully!"}
            </div>
          </motion.div>
        </form>
      </div>
    </div>
  );
}
