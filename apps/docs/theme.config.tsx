import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import Logo from "./components/shared/logo";

const config: DocsThemeConfig = {
  logo: <Logo />,
  project: {
    link: "https://github.com/creight/system",
  },
  docsRepositoryBase: "https://github.com/creight/system",
  footer: {
    text: "Creight :: System",
  },
  primaryHue: 79,
};

export default config;
