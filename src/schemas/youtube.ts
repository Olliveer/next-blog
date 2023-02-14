import { defineField, defineType } from "sanity";
import YoutubePreview from "../components/YoutubePreview";

export default defineType({
  name: "youtube",
  type: "object",
  title: "YouTube Embed",
  fields: [
    defineField({
      name: "url",
      type: "url",
      title: "YouTube video URL",
    }),
  ],
  preview: {
    select: {
      url: "url",
    },
  },
  components: {
    preview: YoutubePreview,
  },
});
