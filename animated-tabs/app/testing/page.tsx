import LinkPreview from "@/copmonents/LinkPreview";
import { createElement } from "react";

const page = () => {
  return createElement(
    "div",
    {
      className:
        "flex bg-neutral-50 overflow-hidden items-center justify-center h-screen w-full",
    },
    createElement(LinkPreview),
  );
};

export default page;
