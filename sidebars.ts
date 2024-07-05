import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // But you can create a sidebar manually

  tutorialSidebar: [
    "intro",
    {
      type: "category",
      label: "FlexUC Omnichannel",
      link: {
        type: "doc",
        id: "flexuc_omnichannel/intro",
      },
      items: [
        {
          type: "category",
          label: "Softphone WebRTC",
          link: {
            type: "doc",
            id: "flexuc_omnichannel/softphone_webrtc/intro",
          },
          items: [
            "flexuc_omnichannel/softphone_webrtc/configuracoes_servidor",
            "flexuc_omnichannel/softphone_webrtc/configuracoes_flexuc/configuracoes_flexuc",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "FlexUC APP",
      link: {
        type: "doc",
        id: "flexuc_app/intro",
      },
      items: ["flexuc_app/placeholder/placeholder"],
    },
    {
      type: "category",
      label: "Flex4U",
      link: {
        type: "doc",
        id: "flex_for_you/intro",
      },
      items: ["flex_for_you/placeholder/placeholder"],
    },
  ],
};

export default sidebars;
