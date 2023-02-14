import Image from "next/image";
import Link from "next/link";
import urlFor from "../../lib/urlFor";
import { Code } from "./Code";

import YoutubeComponent from "./YoutubeComponent";
import atex from "katex";
import KatexView from "./Katex";
import Table from "./Table";

export const richTextCompoents = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="relative w-full h-96">
          <Image
            className="object-contain"
            src={urlFor(value).url()}
            alt={"Blog post image"}
            fill
          />
        </div>
      );
    },
    youtube: ({ value }: any) => (
      <div className="w-[800px]  mx-auto my-5">
        <YoutubeComponent url={value.url} />
      </div>
    ),
    code: ({ value }: any) => (
      <div className="max-w-[800px] rounded mx-auto  my-11">
        <Code key={value._key} code={value.code} language={value.language} />
      </div>
    ),
    latex: ({ value }: any) => (
      <div className="max-w-[800px] rounded mx-auto  my-11">
        <KatexView key={value._key} body={value.body} />
      </div>
    ),
    table: ({ value }: any) => (
      <div className="max-w-[800px] rounded mx-auto  my-11">
        <Table key={value._key} data={value} />
      </div>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="ml-10 py-5 list-disc space-y-5">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="mt-lg list-decimal">{children}</ol>
    ),
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-5xl py-10 font-bold">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-4xl py-10 font-bold">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-3xl py-10 font-bold">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-2xl py-10 font-bold">{children}</h4>
    ),

    blockquote: ({ children }: any) => (
      <blockquote className="border-l-brand-500 border-l-4 pl-5 py-5 my-5">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;

      return (
        <Link
          href={value.href}
          rel={rel}
          className="underline decoration-brand-500 hover:decoration-black"
        >
          {children}
        </Link>
      );
    },
    internalLink: ({ children, value }: any) => console.log(children, value),
  },
};
