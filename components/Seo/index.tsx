import { NextSeo } from "next-seo";
import * as React from "react";

const Seo = (props: any) => {
  return (
    <NextSeo
      additionalLinkTags={[
        {
          rel: "icon",
          href: "/icon.png",
        },
      ]}
      title={props.title || "Temujin site"}
      description="Temujin's business website"
      canonical=""
    />
  );
};

export default Seo;
