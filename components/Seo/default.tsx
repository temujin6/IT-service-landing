import React from "react";
import { DefaultSeo } from "next-seo";

const DefaultSEO = () => {
  return (
    <DefaultSeo
      additionalLinkTags={[
        {
          rel: "icon",
          href: "/icon.png",
        },
      ]}
      title="Temujin site"
      description="Temujin's business website"
      canonical=""
    />
  );
};

export default DefaultSEO;
