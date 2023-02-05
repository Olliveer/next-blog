"use client";

import { projectId, dataset } from "./sanity.client";
import { definePreview } from "next-sanity/preview";

function onPublicAccessOnly() {
  throw new Error(`Unable to load preview as you're not logged in.`);
}

if (!projectId || !dataset) {
  throw new Error(
    `Unable to load preview as projectId or dataset is missing. Check your sanity.json file.`
  );
}

export const userPrview = definePreview({
  projectId,
  dataset,
  onPublicAccessOnly,
});
