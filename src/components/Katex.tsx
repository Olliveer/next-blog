"use client";

import Latex from "react-latex";
import katex from "katex";
import "katex/dist/katex.css";

function KatexView({ body }: { body: string }) {
  const html = katex.renderToString(body);
  return <div dangerouslySetInnerHTML={{ __html: html }}></div>;
}

export default KatexView;
