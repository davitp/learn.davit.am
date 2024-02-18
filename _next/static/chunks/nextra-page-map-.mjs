import meta from "../../../pages/_meta.ts";
export const pageMap = [{
  data: meta
}, {
  name: "index",
  route: "/",
  frontMatter: {
    "title": "Index",
    "description": "Description"
  }
}, {
  name: "linux-programming",
  route: "/linux-programming",
  children: [{
    name: "introduction",
    route: "/linux-programming/introduction",
    frontMatter: {
      "sidebarTitle": "Introduction"
    }
  }]
}];