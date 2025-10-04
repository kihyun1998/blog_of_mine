import { CopyButton } from "./copy-button";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-tsx";
import "prismjs/components/prism-python";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-json";
import "prismjs/components/prism-css";
import "prismjs/components/prism-markdown";

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  showLineNumbers?: boolean;
}

export function CodeBlock({
  code,
  language = "text",
  filename,
  showLineNumbers = false,
}: CodeBlockProps) {
  const trimmedCode = code.trim();

  let highlightedCode = trimmedCode;
  if (language && Prism.languages[language]) {
    highlightedCode = Prism.highlight(
      trimmedCode,
      Prism.languages[language],
      language
    );
  }

  return (
    <div className="relative my-6 overflow-hidden rounded-lg border bg-muted/50">
      <div className="flex items-center justify-between border-b bg-muted px-4 py-2">
        <div className="flex items-center gap-2">
          {filename && (
            <span className="text-sm font-medium text-muted-foreground">
              {filename}
            </span>
          )}
          {language && (
            <span className="text-xs font-mono text-muted-foreground">
              {language}
            </span>
          )}
        </div>
        <CopyButton code={trimmedCode} />
      </div>
      <div className="overflow-x-auto">
        <pre className={`p-4 ${showLineNumbers ? "line-numbers" : ""}`}>
          <code
            className={`language-${language}`}
            dangerouslySetInnerHTML={{ __html: highlightedCode }}
          />
        </pre>
      </div>
    </div>
  );
}
