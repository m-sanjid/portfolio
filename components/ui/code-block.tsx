import { useEffect, useState } from "react";
import * as shiki from "shiki";

interface CodeBlockProps {
  code: string;
  language: string;
}

export function CodeBlock({ code, language }: CodeBlockProps) {
  const [highlightedCode, setHighlightedCode] = useState("");

  useEffect(() => {
    const highlight = async () => {
      const highlighter = await shiki.createHighlighter({
        themes: ["github-dark"],
        langs: ["typescript", "tsx", "javascript", "jsx", "json", "html", "css"],
      });
      const html = highlighter.codeToHtml(code, { 
        lang: language,
        themes: {
          light: "github-dark",
          dark: "github-dark"
        }
      });
      setHighlightedCode(html);
    };
    highlight();
  }, [code, language]);

  return (
    <div
      className="rounded-lg overflow-hidden"
      dangerouslySetInnerHTML={{ __html: highlightedCode }}
    />
  );
} 