import { defineArrayMember, defineType } from "sanity";
import mathIcon from "../components/mathIcon";
import mathInlineIcon from "../components/mathInlineIcon";

export default defineType({
  name: "portableTextWithLatex",
  type: "array",
  title: "Body",
  of: [
    defineArrayMember({
      type: "block",
      title: "Block",
      of: [{ type: "latex", icon: mathInlineIcon, title: "Inline math" }],
    }),
    defineArrayMember({ type: "latex", icon: mathIcon, title: "Math block" }),
  ],
});
