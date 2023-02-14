import { defineArrayMember, defineType } from "sanity";

export default defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "sizeChart",
      title: "Size Chart",
      type: "table",
    },
  ],
});
