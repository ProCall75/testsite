import type { Meta, StoryObj } from "@storybook/react";

import Page from "@/app/(marketing)/tarifs/page";

const meta: Meta<typeof Page> = {
  title: "Pages/Pricing",
  component: Page,
  parameters: { layout: "fullscreen" },
};

export default meta;
export const Default: StoryObj<typeof Page> = {};
