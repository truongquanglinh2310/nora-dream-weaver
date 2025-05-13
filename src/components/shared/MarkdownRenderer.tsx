
import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { Skeleton } from "@/components/ui/skeleton";

interface MarkdownRendererProps {
  content: string;
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate markdown processing time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [content]);

  if (isLoading) {
    return (
      <div className="space-y-4">
        <Skeleton className="h-8 w-3/4" />
        <Skeleton className="h-24 w-full" />
        <Skeleton className="h-8 w-2/3" />
        <Skeleton className="h-16 w-full" />
      </div>
    );
  }

  return (
    <div className="prose prose-blue max-w-none">
      <ReactMarkdown
        components={{
          h1: ({ node, ...props }) => <h1 className="scroll-m-20 text-3xl font-bold tracking-tight mb-4" {...props} />,
          h2: ({ node, ...props }) => <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-3 mt-6" {...props} />,
          h3: ({ node, ...props }) => <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mb-2 mt-5" {...props} />,
          p: ({ node, ...props }) => <p className="leading-7 text-muted-foreground mb-4" {...props} />,
          ul: ({ node, ...props }) => <ul className="list-disc list-outside ml-6 mb-4" {...props} />,
          ol: ({ node, ...props }) => <ol className="list-decimal list-outside ml-6 mb-4" {...props} />,
          li: ({ node, ...props }) => <li className="mt-1" {...props} />,
          blockquote: ({ node, ...props }) => (
            <blockquote className="border-l-4 border-nora-300 pl-4 italic text-muted-foreground" {...props} />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
