import type { Meta, StoryObj } from "@storybook/react";

import Page from "@/app/(marketing)/tableau-de-bord-apercu/page";

const meta: Meta<typeof Page> = {
  title: "Pages/DashboardPreview",
  component: Page,
  parameters: { layout: "fullscreen" },
};

export default meta;
export const Default: StoryObj<typeof Page> = {};
