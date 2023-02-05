import { client } from "./sanity.client";
import imageBuilder from "@sanity/image-url";

const builder = imageBuilder(client);

function urlFor(source: any) {
  return builder.image(source);
}

export default urlFor;
