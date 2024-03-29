import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { codeInput } from "@sanity/code-input";
// import { latexInput } from "sanity-plugin-latex-input";
import { table } from "@sanity/table";
import { schemaTypes } from "./src/schemas";
import { myTheme } from "./theme";
import StudioNavbar from "./src/components/StudioNavbar";
import Logo from "./src/components/Logo";
import { defaultDocumentNode } from "./structure";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
  basePath: "/studio",
  name: "NEXTBLOG_STUDIO",
  title: "NEXTBLOG Studio",
  projectId,
  dataset,

  plugins: [
    deskTool({
      defaultDocumentNode,
    }),
    visionTool(),
    codeInput(),
    table(),
  ],
  schema: {
    types: schemaTypes,
  },
  studio: {
    components: {
      logo: Logo,
      navbar: StudioNavbar,
    },
  },
  theme: myTheme,
});
