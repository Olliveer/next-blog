"use client";

import { userPrview } from "../../lib/sanity.preview";
import BlogList from "./BlogList";

interface PreviewBlogListProps {
  query: string;
}

export default function PreviewBlogList({ query }: PreviewBlogListProps) {
  const posts = userPrview(null, query);

  return <BlogList posts={posts} />;
}
