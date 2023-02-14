"use client";

import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

interface CodeProps {
  language: string;
  code: string;
}

export function Code({ code, language }: CodeProps) {
  return (
    <SyntaxHighlighter language={language} style={docco}>
      {code}
    </SyntaxHighlighter>
  );
}
